import zlib from 'zlib'
import fs from 'fs'

const source = fs.readFileSync('zlib.mjs')
const result = zlib.gzipSync(source)

fs.writeFileSync('zlib.mjs', result)


// Module 'zlib' adalah bawaan Node.js yang dipakai untuk kompresi (compress) dan dekompresi (decompress) data.
// Format yang didukung antara lain: gzip, deflate, dan brotli.
// Biasanya dipakai untuk:
// 1. Mengkompres file agar ukurannya lebih kecil (contoh: file log, backup).
// 2. Mengirim data lewat jaringan dengan ukuran lebih ringan (misalnya response gzip di HTTP).
// 3. Membaca file terkompres (gzip/deflate) dan mengekstraknya kembali.
// Contoh penggunaan: zlib.gzip(), zlib.deflate(), zlib.brotliCompress(), dll.
//
// Catatan: 'zlib' masih digunakan sampai sekarang, terutama di server untuk menghemat bandwidth
// atau di aplikasi yang perlu mengelola file/data terkompres.
