import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import db from './config/database.js'
import router from './routes/routes.js'

dotenv.config()
const app = express()

try {
    await db.authenticate()
    console.log('database connekted')
   
} catch (error) {
    console.log(error)
}

app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(cookieParser())
app.use(express.json())
app.use(router)

app.listen(5000, ()=> console.log('server runnign at port 5000'))


// login>copy accToken > get user > tunggu exp > get token > get user