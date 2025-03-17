// Mengimpor modul 'fs' (File System) bawaan Node.js untuk menangani operasi file.
import fs from 'fs';

// Membuat writable stream untuk menulis ke file 'target.log'.
const writter = fs.createWriteStream('target.log');

// Menulis data ke dalam file menggunakan stream.
writter.write("faduil\n");  // Menulis "faduil" diikuti oleh newline (\n).
writter.write("uddufoh\n"); // Menulis "uddufoh" diikuti oleh newline.
writter.write("ddef\n");    // Menulis "ddef" diikuti oleh newline.

// Menutup stream setelah semua data ditulis.
// Ini memastikan bahwa file disimpan dengan benar.
writter.end();

// Membuat readable stream untuk membaca isi file 'target.log'.
const reader = fs.createReadStream('target.log');

// Menambahkan event listener untuk menangani event "data".
// Event "data" akan dipicu setiap kali ada data yang dibaca dari stream.
reader.addListener("data", (data) => {
    // Data yang dibaca dalam bentuk buffer, perlu dikonversi ke string.
    console.info(data.toString());
});
