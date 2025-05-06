const http = require('http')

http.createServer((req, res) => {
    res.write('hello wolrd')
    res.end()
}).listen(3000, () => {
    console.log("server is listening of port 3000")
})