import net from "net"

const server = net.createServer((client)=>{
    console.info("clien connected")
    client.addListener("data", (data)=>{
        console.info(`recieve data ${data.toString()}`)
        client.write(`helo ${data.toString()}\r\n`)
    })
})
server.listen(3000, "localhost")



// Module 'net' adalah bawaan Node.js yang dipakai untuk membuat komunikasi jaringan berbasis TCP.
// Dengan 'net' kita bisa bikin server dan client socket sederhana yang saling kirim data langsung.
// Biasanya dipakai untuk:
// 1. Bikin server custom berbasis TCP (contoh: chat server, game server).
// 2. Komunikasi antar aplikasi tanpa HTTP.
// 3. Menangani perangkat atau protokol custom yang kirim data lewat TCP.
