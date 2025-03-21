//core modules
//file system

const fs = require('fs')


//menuliskn string ke file secara syncronous
fs.writeFileSync('tes.txt', 'hello world secara syncronous') 
// formatnya ('nama file', 'isi data') == kalau nama file yg dicari tidak ada , maka akan otomatis dibuatkan
// bisa juga ('namafolder/namafile', 'isi data') == kalau nama folder yg dicari tidak ada, maka akan eror, karena utk buat folder beda perintah


// console.log(fs)