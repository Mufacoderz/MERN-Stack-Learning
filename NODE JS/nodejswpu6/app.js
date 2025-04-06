
const {tulisPertanyaan, simpanContact} = require('./contacts')

const main = async () => {
    const nama = await tulisPertanyaan('Masukkan Nama anda : ')
    const email = await tulisPertanyaan('Masukkan Email anda : ')
    const noHP = await tulisPertanyaan('Masukkan nomor HP anda : ')
    
    simpanContact(nama, email, noHP)
}

main()

