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