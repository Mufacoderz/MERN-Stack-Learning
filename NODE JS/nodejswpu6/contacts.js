
const fs = require('fs')
const chalk = require('chalk')

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





const simpanContact = (nama, email, noHP) => {
    const contact = { nama, email, noHP };

    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    //cek duplikaat
    const duplikat = contacts.find((contact) => contact.nama === nama)
    if(duplikat){
        console.log(chalk.red.inverse.bold('kontak sudah terdaftar, gunakan nama lain'))
        return false
    }

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); 
    console.log('Kontak berhasil disimpan.');

    
}

module.exports = {simpanContact}