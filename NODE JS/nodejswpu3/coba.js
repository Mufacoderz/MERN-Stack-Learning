
console.log('hello world');

function cetakNama(nama) {
    return `Halo, nama saya ${nama}`; 
}

const PI = 3.14

const mahasiswa = {
    nama: 'fadil',
    umur: 19,
    cetakMhs(){
        return `hallo nama saya ${this.nama} dan saya berumur${this.umur} tahun`
    }
}

class Orang{
    constructor(){
        console.log(`objek orang telah dibuat`)
    }
}

//====  3 cara export module  ===//

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang
// }

module.exports = {cetakNama, PI, mahasiswa, Orang}