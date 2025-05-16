
const express = require('express')
const app = express()
const port = 3000

//gunakan ejs
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')  // ekstrensinya jadi ejs bukan html
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/contact', (req, res) => {
  res.render('contact')
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


