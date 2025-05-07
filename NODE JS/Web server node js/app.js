const http = require('http')
const port = 3000

http
.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html,'
    });

    const url = req.url;
    if( url === '/about'){
        res.write('<h1>Ini adalah page about</h1>');
        res.end();
    } else if( url === '/contact'){
        res.write('<h1>Ini adalah page contact</h1>');
        res.end();
    } else{
        res.write('hello wolrd');
        res.end();
    }

})
.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})