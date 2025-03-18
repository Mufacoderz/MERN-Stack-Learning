// Menampilkan teks "hello world" ke console saat file ini dieksekusi
console.log('hello world');

// Mendefinisikan fungsi cetakNama yang menerima satu parameter (nama)
function cetakNama(nama) {
    return `Halo, nama saya ${nama}`; // Mengembalikan string dengan nama yang diberikan
}

// Mengekspor fungsi cetakNama agar bisa digunakan di file lain
module.exports = cetakNama; // Pastikan menggunakan 'module.exports' (huruf kecil)
