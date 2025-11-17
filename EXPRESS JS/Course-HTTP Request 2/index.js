import express from 'express'
const app = express()

app.get('/', (req, res)=>{
    res.send('<h1>Home page</h1>')
})

app.post('/register', (req, res)=>{

    res.sendStatus(201)
})

app.put('/user/fadil', (req, res)=>{
    res.sendStatus(200)
})

app.patch('/user/fadil', (req, res)=>{
    res.sendStatus(200)
})

app.delete('/user/fadil', (req, res)=>{
    res.sendStatus(200)
})


app.listen(3000, ()=>{
    console.log('Server running on http://localhost:3000')
})
