const http = require('http')
const port = 3000
const fs = require('fs')
const renderHTML =  (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err){
            res.writeHead(404)
            res.write('file not found')
        } else{
            res.write(data)
        }
        res.end()
    })
}

http
.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html,'
    });

    const url = req.url;
    if( url === '/about'){
        renderHTML('./about.html', res)
    } else if( url === '/contact'){
        renderHTML('./contact.html', res)
    } else{
        // res.write('hello wolrd');
        renderHTML('./index.html', res)
    }

})
.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})