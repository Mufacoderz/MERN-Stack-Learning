const express = require("express")
const app = express()
const PORT= 3000

//middleware buat baca json dri body requst
app.use(express.json())

//data pake array
let todos= [
    {id: 1, task: "belajar ngodinh", done: false},
    {id: 2, task: "belajar uts", done: true},
]


//get - ambil todo
app.get("/todos", (req, res)=>{
    res.json(todos)
})


//post - tmbh todo
app.post("/todos", (req, res) =>{
    const newTodo = {
        id: todos.length+1,
        task: req.body.task,
        done: false,
    }
    todos.push(newTodo)
    res.status(201).json(newTodo)
})


//running
app.listen(PORT, ()=>{
    console.log(`server jln di port ${PORT}`)
})
