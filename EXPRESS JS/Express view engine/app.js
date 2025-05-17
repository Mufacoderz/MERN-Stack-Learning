
const express = require('express')
const app = express()
const port = 3000

//gunakan ejs
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const mahasiswa = []
  res.render('index', {
    nama: 'Fadil',
    title: 'halaman home',
    mahasiswa,
   })  
})

app.get('/about', (req, res) => {
  res.render('about', {title: 'Halaman About'})
})

app.get('/contact', (req, res) => {
  res.render('contact' , {title: 'Halaman Contact'})
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


