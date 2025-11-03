const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Dummy data
let posts = [
    { slug: "hello-world", title: "Hello World", content: "Ini postingan pertama!" },
    { slug: "express-js", title: "Belajar Express.js", content: "Ini postingan ke 19 juta!" }
];

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.get('/posts/:slug', (req, res) => {
    const post = posts.find(p => p.slug === req.params.slug);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
});

app.post('/posts', (req, res) => {
    const { slug, title, content } = req.body;
    if (!slug || !title || !content) {
        return res.status(400).json({ message: "All fields are required" });
    }

    if (posts.find(p => p.slug === slug)) {
        return res.status(400).json({ message: "Slug already exists" });
    }

    const newPost = { slug, title, content };
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.patch('/posts/:slug', (req, res) => {
    const post = posts.find(p => p.slug === req.params.slug);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const { title, content } = req.body;
    if (title) post.title = title;
    if (content) post.content = content;

    res.json(post);
});


app.delete('/posts/:slug', (req, res) => {
    const index = posts.findIndex(p => p.slug === req.params.slug);
    if (index === -1) return res.status(404).json({ message: "Post not found" });

    const deletedPost = posts.splice(index, 1);
    res.json({ message: "Post deleted", post: deletedPost[0] });
});

app.listen(port, () => {
    console.log(`Simple Blog API running at http://localhost:${port}`);
});
