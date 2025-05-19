
const express = require('express')
const app = express()
const port = 3000
const expresslayouts = require('express-ejs-layouts')

//gunakan ejs
app.set('view engine', 'ejs')
app.use(expresslayouts)
app.set('layout', 'layouts/main-layout')

app.get('/', (req, res) => {
  const mahasiswa = []
  res.render('index', {
    nama: 'Fadil',
    title: 'halaman home',
    mahasiswa,
    layout: 'layouts/main-layout'
   })  
})

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'Halaman About'})
})

app.get('/contact', (req, res) => {
  res.render('contact' , {
    layout: 'layouts/main-layout',
    title: 'Halaman Contact'})
})

app.get('/product/:id/category/:idCat', (req, res)=>{
  res.send(`Product ID :  ${req.params.id} <br> Category Id : ${req.params.idCat}`)
})

app.use('/', (req, res) => {
  res.status(404)
  res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


