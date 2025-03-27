// core module

// readline

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("masukkan nama mu : ", (nama)=> {
    console.log(`halo ${nama}`)
    rl.close
})