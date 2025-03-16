// // Mengimpor modul 'readline' yang digunakan untuk membaca input dari terminal (stdin).
// import readline from "readline";

// // Mengimpor modul 'process' yang menyediakan informasi dan kontrol terhadap proses yang berjalan.
// import process from "process";

// // Membuat antarmuka (interface) readline untuk membaca input dan menampilkan output ke terminal.
// const input = readline.createInterface({
//     input: process.stdin,  // Menentukan bahwa input berasal dari standard input (keyboard).
//     output: process.stdout, // Menentukan bahwa output akan ditampilkan di standard output (layar terminal).
// });

// // Menggunakan metode 'question' dari readline untuk menampilkan pertanyaan dan menangani input pengguna.
// input.question('Siapa nama anda ', (name) => {
//     // Menampilkan output ke terminal menggunakan 'console.info'.
//     console.info(`Halo ${name}`);

//     // Menutup antarmuka readline setelah selesai digunakan untuk mencegah program tetap berjalan.
//     input.close();
// });

////VERSI MODERN / TANPA CALLBACK

import readline from "readline/promises"; // Menggunakan readline versi promises
import process from "process";

// Membuat antarmuka readline
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function main() {
    // Menggunakan await untuk menunggu input dari user
    const name = await input.question('Siapa nama anda ');
    console.info(`Halo ${name}`);

    // Menutup antarmuka readline setelah selesai
    input.close();
}

// Memanggil fungsi utama
main();




