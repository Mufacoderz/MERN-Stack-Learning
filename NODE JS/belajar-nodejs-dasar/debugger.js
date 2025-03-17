// dalam debagging ada istilah breakpoint, yaitu lokasi dimana kita ingin menghentikan sementara eksekusi kode program

// agar file jalan dalam mode debugging maka harus dgn perintah 'node inspect namafile.js'


function sayHello(name){
    debugger;
    return `hello ${name}`;

}

const name = 'fadil'
debugger;
console.info(sayHello(name))