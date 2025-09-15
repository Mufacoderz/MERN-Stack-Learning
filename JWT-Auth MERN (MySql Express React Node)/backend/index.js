import express from 'express'
import db from './config/database.js'
import Users from './models/UserModel.js'
const app = express()

try {
    await db.authenticate()
    console.log('database connekted')
    await Users.sync()
} catch (error) {
    console.log(error)
}

app.listen(5000, ()=> console.log('server runnign at port 5000'))