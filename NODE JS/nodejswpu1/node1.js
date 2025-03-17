// //contoh kode synchronous

// const getUserSync = (id) => {
//     // let nama = '';
//     // if(id === 1){
//     //     nama = 'muhammad fadil'
//     // } else {
//     //     nama = 'ucup'
//     // }
//     const nama = id === 1? "muhammad fadil" : "ucup sumanto"
//     return { id, nama}
// }



// const userSatu = getUserSync(1)
// console.log(userSatu)

// const userDua = getUserSync(2)
// console.log(userDua)

// const halo = 'hello world'
// console.log(halo)

//====================================================================//

//contoh kode asynchronous

const getUser = (id, cb) => {
    const time = id === 1? 3000 : 2000
    setTimeout(() => {
        const nama = id === 1? "muhammad fadil" : "ucup sulaiman"
        cb({id, nama})
    }, time)
}

const userSatu = getUser(1, (hasil) => {
    console.log(hasil)
})
const userDua = getUser(2, (hasil) => {
    console.log(hasil)
})

const halo = 'hello world'
console.log(halo)

//maka outputnya akan muncul halo dulu. 
// kemudian 2 detik setelah mulai, muncul user 2.
// 3 detik setelah mulai, muncul user 1


// ================================================================================================================

// Analogi Synchronous vs. Asynchronous

// Bayangkan kamu pergi ke warung untuk membeli mie instan:

// Synchronous (Sinkron)
// Kamu pergi ke warung.
// Kamu pesan mie instan.
// Kamu menunggu sampai mie selesai dimasak. (Selama ini, kamu tidak bisa melakukan hal lain).
// Setelah mie matang, kamu membawa pulang dan makan.
// 👉 Kesimpulan: Kamu harus menunggu satu tugas selesai sebelum melanjutkan ke tugas berikutnya.

// Asynchronous (Asinkron)
// Kamu pergi ke warung.
// Kamu pesan mie instan.
// Sambil menunggu mie matang, kamu pergi ke minimarket untuk beli minuman.
// Setelah mie matang, penjual memanggilmu, dan kamu mengambilnya.
// Kamu pulang dengan mie dan minuman.
// 👉 Kesimpulan: Kamu bisa melakukan tugas lain sambil menunggu tugas pertama selesai.

// Dalam Node.js:

// Synchronous: Node.js akan menunggu satu tugas selesai sebelum menjalankan yang lain.
// Asynchronous: Node.js tetap menjalankan tugas lain sambil menunggu tugas yang lebih lama selesai.