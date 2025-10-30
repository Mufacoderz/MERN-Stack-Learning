const express = require("express")
const app = express()

app.use(express.json()) 

let notes = [
    { id: 1, text: "Belajar Express.js" },
    { id: 2, text: "Latihan CRUD" },
]


app.get("/notes", (req, res) => {
    res.json(notes)
})


app.get("/notes/:id", (req, res) => {
    const note = notes.find((n) => n.id === parseInt(req.params.id))
    if (!note) return res.status(404).json({ message: "Note tidak ditemukan" })
    res.json(note)
})


app.post("/notes", (req, res) => {
    const newNote = {
        id: notes.length+1,
        text: req.body.text,
    }
    notes.push(newNote)
    res.status(201).json(newNote)
})

app.put("/notes/:id", (req, res) => {
    const note = notes.find((n) => n.id === parseInt(req.params.id))
    if (!note) return res.status(404).json({ message: "Note tidak ditemukan" })

    note.text = req.body.text
    res.json(note)
})

app.delete("/notes/:id", (req, res) => {
    notes = notes.filter((n) => n.id !== parseInt(req.params.id))
    res.status(204).end()
})

app.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000")
})
