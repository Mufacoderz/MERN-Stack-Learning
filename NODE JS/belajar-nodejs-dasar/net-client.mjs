import net from "net"

const client = net.createConnection({port:3000, host:"localhost"})

setInterval(function(){
    client.write("Eko\r\n")
},2000)

client.addListener("data", function(data){
    console.info(`recieve data from server : ${data.toString()}`)
})