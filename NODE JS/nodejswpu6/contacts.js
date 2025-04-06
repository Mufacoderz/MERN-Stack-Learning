const readline = require('readline')
const fs = require('fs')
const { resolve } = require('path')
const { rejects } = require('assert')

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


const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, rejects) => {
        rl.question( pertanyaan, (nama) => {
            resolve(nama)
        })
    })
}


const simpanContact = (nama, email, noHP) => {
    const contact = { nama, email, noHP };

    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); 
    console.log('Kontak berhasil disimpan.');

    rl.close();
}

module.exports = {tulisPertanyaan, simpanContact}