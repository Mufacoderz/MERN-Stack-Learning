const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

//membuat folder data
const dirPath = './data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}

//membuat file contacts.json, jika belum ada
const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[}', 'utf-8')
}


rl.question("masukkan nama anda : ", (nama)=> {
    rl.question('masukkan nomor HP anda :' ), (noHp) => {
        const contact = {nama, noHp}
        const fileButler = fs.readFileSync('data/contacts.json', 'utf-8')
        const contacts = JSON.parse(fileButler)

        contacts.push(contact)

        fs.writeFileSync('data/contacts.json', JSON.stringify(contact))
        console.log('done')
    }
    rl.close
})