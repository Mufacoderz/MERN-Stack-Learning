import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.listen(500, ()=> console.log('server is running.....'))