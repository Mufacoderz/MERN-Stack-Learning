// Import modul process dari Node.js (opsional, karena sudah tersedia secara global)
import process from "process"; // Direkomendasikan untuk eksplisit mengimpor

// Menambahkan event listener untuk menangkap event 'exit'
// Akan dipanggil ketika proses Node.js akan keluar
process.addListener('exit', (exitCode) => {
    console.info(`node js exit with code ${exitCode} `); // Menampilkan kode keluar proses
});

// Menampilkan versi Node.js yang sedang berjalan
console.info(process.version);

// Menampilkan argumen yang diberikan saat menjalankan skrip Node.js dalam bentuk tabel
console.table(process.argv);

// Menampilkan laporan proses (bisa digunakan untuk debugging dan monitoring)
console.table(process.report);

// Menampilkan environment variables dalam bentuk tabel
console.table(process.env);

// Menghentikan proses Node.js dengan exit code 1 (berarti terjadi error atau exit yang disengaja)
process.exit(1);

// Baris ini tidak akan pernah dieksekusi karena process.exit sudah dipanggil
console.info("hello");

/*
Penjelasan tambahan tentang `process` di Node.js:
1. `process` adalah objek global yang dapat diakses di seluruh aplikasi Node.js tanpa perlu mengimpor.
2. `process.addListener('exit', callback)` digunakan untuk menangkap event saat proses akan berhenti, misalnya untuk logging atau membersihkan sumber daya.
3. `process.version` mengembalikan versi Node.js yang sedang digunakan, berguna untuk debugging.
4. `process.argv` berisi daftar argumen yang diberikan saat menjalankan skrip, memungkinkan pengguna menginput parameter dari terminal.
5. `process.report` menyediakan informasi diagnostik tentang proses yang sedang berjalan, digunakan untuk debugging performa.
6. `process.env` memungkinkan akses ke variabel lingkungan, berguna untuk konfigurasi aplikasi tanpa mengubah kode.
7. `process.exit(code)` digunakan untuk menghentikan proses secara eksplisit dengan kode keluar tertentu (0 untuk sukses, selain 0 untuk error atau exit khusus).
*/
