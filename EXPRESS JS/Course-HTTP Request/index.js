import express from 'express'
const app = express()
const port = 3000

app.get("/", (req, res)=>{
    res.send("hello world")
})
app.get("/about", (req, res)=>{
    res.send("hello about yohohohohohohohohohoh lorem")
})
app.get("/contact", (req, res)=>{
    res.send("hello contoct yohohohohohohohohohoh lorem")
})

app.listen(port,()=>{
    console.log(`server runnign ot port ${port}`)
})