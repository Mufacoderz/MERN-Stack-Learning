
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

