import net from "net"

const server = net.createServer((client)=>{
    console.info("clien connected")
    client.addListener("data", (data)=>{
        console.info(`recieve data ${data.toString()}`)
        client.write(`helo ${data.toString()}\r\n`)
    })
})
server.listen(3000, "localhost")