import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
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

app.use(cookieParser())
app.use(express.json())
app.use(router)

app.listen(5000, ()=> console.log('server runnign at port 5000'))