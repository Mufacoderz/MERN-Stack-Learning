//core modules


//file system

const fs = require('fs')


// //menuliskn string ke file secara syncronous
// // fs.writeFileSync('tes.txt', 'hello world secara syncronous') 
// // formatnya ('nama file', 'isi data') == kalau nama file yg dicari tidak ada , maka akan otomatis dibuatkan
// // bisa juga ('namafolder/namafile', 'isi data') == kalau nama folder yg dicari tidak ada, maka akan eror, karena utk buat folder beda perintah


// // console.log(fs)
// try{
    //     fs.writeFileSync('data/test.txt', ' Hello world secara sinkronus')
    // } catch (e){
        //     console.log(e)
        // }



 //menuliskn string ke file secara asyncronous

//  fs.writeFile('data/tes.txt', 'hellow world secara asycnronous', (e) => {
//     console.log(e)
//  })


//==============================================================

//membaca isi file secqra syncronous

// const baca = fs.readFileSync('data/tes.txt')

// console.log(baca.toString())//awalnya datanya berupa str, pakai method toString nuat jadikan string

//tanpa method toString, pake parameter encoding

// const baca = fs.readFileSync('data/tes.txt', 'utf-8')//parameyter ke3 buat jadikan ke string

// console.log(baca)//awalnya datanya berupa str, pakai method toString nuat jadikan string

//membaca secara asyncronous

fs.readFile('data/tes.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data)
})