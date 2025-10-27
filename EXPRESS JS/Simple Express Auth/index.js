const express = require("express");
const app = express();
const PORT = 3000;

// Middleware - body parser JSON
app.use(express.json());

// Middleware - simpel loginn
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

//data
let books = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin" },
    { id: 2, title: "You Don't Know JS", author: "Kyle Simpson" },
];

//authnya
const auth = (req, res, next) => {
    
    const token = req.headers.token;
    if (token === "123") {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
};


// Public route
app.get("/books", (req, res) => {
    res.json(books);
});

// butuh token
app.post("/books", auth, (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) return res.status(400).json({ message: "Title & author required" });

    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});



app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});
