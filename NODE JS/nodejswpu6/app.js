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


const pertanyaan1 = () => {
    return new Promise((resolve, rejects) => {
        rl.question('Masukkan nama anda: ', (nama) => {
            resolve(nama)
        })
    })
}
const pertanyaan2 = () => {
    return new Promise((resolve, rejects) => {
        rl.question('Masukkan email anda: ', (email) => {
            resolve(email)
        })
    })
}

const main = async () => {
    const nama = await pertanyaan1()
    const email = await pertanyaan2()
    const contact = { nama, email };

    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); 
    console.log('Kontak berhasil disimpan.');

    rl.close();
}

main()



//versi syncronous

// rl.question("Masukkan nama anda: ", (nama) => {
//     rl.question("Masukkan nomor HP anda: ", (noHp) => {
//         const contact = { nama, noHp };

//         const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
//         const contacts = JSON.parse(fileBuffer);

//         contacts.push(contact);

//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); 
//         console.log('Kontak berhasil disimpan.');

//         rl.close();
//     });
// });