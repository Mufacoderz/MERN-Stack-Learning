import Users from '../models/UserModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getUsers = async(req, res)=>{
    try {
        const users = await Users.findAll({
            attributes: ['id', 'name', 'email']
        })
        res.json(users)
    } catch (error) {
        console.log(error)
    }
}

export const Register = async(req, res)=>{
    const {name, email, password, confPassword}= req.body
    if(password !== confPassword) return res.status(400).json({msg: 'password tidak cocok'})
        const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)
    try {
        await Users.create({
            name: name,
            email: email,
            password: hashPassword
        })
        res.json({msg: 'register berhasil'})
    } catch (error) {
        console.log(error)
    }
}

export const Login = async (req, res) => {
    try {
        const user = await Users.findOne({
            where: {
                email: req.body.email
            }
        })

        if (!user) {
            return res.status(404).json({ msg: 'Email tidak ditemukan' })
        }

        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) {
            return res.status(400).json({ msg: 'Password salah' })
        }

        const userId = user.id
        const name = user.name
        const email = user.email

        const accessToken = jwt.sign(
            { userId, name, email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '20s' }
        )

        const refreshToken = jwt.sign(
            { userId, name, email },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        )

        await Users.update(
            { refresh_token: refreshToken },
            { where: { id: userId } }
        )

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })

        return res.json({ accessToken })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'Server error' })
    }
}
