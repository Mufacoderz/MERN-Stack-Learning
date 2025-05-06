
//mengambil argumen dari command line

// const command = process.argv[2]

const yargs = require("yargs")
const contacts = require('./contacts.js')


// if(command == 'add'){

// } else if (command == 'remove'){

// } else if (command == 'list'){

// }

yargs.command({
    command: 'add',
    describe: 'menambahkan kontak baru',
    builder: {
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'email',
            demandOption: false,
            type: 'string',
        },
        noHP: {
            describe: 'nomor hp',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        // const contact = {
        //     nama: argv.nama,
        //     email: argv.email,
        //     noHP: argv.noHP,
        // }
        // console.log(contact)
        contacts.simpanContact(argv.nama, argv.email, argv.noHP)
    }
}).demandCommand()


//menampilkan daftar semua nama dan nomor contact
yargs.command({
    command: 'list',
    describe: 'menampilkan semua info contact',
    handler(){
        contacts.listContact()
    }
})


//menambah detail kontak
yargs.command({
    command: 'detail',
    describe: 'menampilkan detail contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contacts.detailContact(argv.nama)
    }
})

//menghapus kontak
yargs.command({
    command: 'delete',
    describe: 'menghapus contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contacts.deleteContact(argv.nama)
    }
})

yargs.parse()
























// const {tulisPertanyaan, simpanContact} = require('./contacts')

// const main = async () => {
//     const nama = await tulisPertanyaan('Masukkan Nama anda : ')
//     const email = await tulisPertanyaan('Masukkan Email anda : ')
//     const noHP = await tulisPertanyaan('Masukkan nomor HP anda : ')
    
//     simpanContact(nama, email, noHP)
// }

// main()

