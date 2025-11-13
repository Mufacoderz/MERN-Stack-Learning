import express from 'express'
import db from './db.js'

const app = express()
app.use(express.json())

app.get("/mahasiswa", (req, res) => {
    db.query("SELECT * FROM mahasiswa", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

app.get("/dosen", (req, res) => {
    db.query("SELECT * FROM dosen", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

app.listen(3000, () => console.log("🚀 Server running at http://localhost:3000"));