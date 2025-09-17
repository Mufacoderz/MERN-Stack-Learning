import express from 'express'
import db from './config/database.js'
import router from './routes/routes.js'
const app = express()

try {
    await db.authenticate()
    console.log('database connekted')
   
} catch (error) {
    console.log(error)
}
app.use(express.json())
app.use(router)

app.listen(5000, ()=> console.log('server runnign at port 5000'))