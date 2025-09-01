import util from 'util'

console.info(util.format("Nama: %s", "Muhammad"))

const person = {firstname: "Muhammad", lastname: "Fadil"}
console.info(util.format("person : %j", person))


// Module 'util' adalah bawaan Node.js yang berisi kumpulan fungsi helper/utility.
// Salah satunya 'util.format' yang mirip seperti printf di bahasa lain,
// digunakan untuk membuat string dengan placeholder (%s, %d, %j, dll).
// Contoh:
// %s = string
// %d = number
// %j = JSON (object dalam bentuk string)
//
// Catatan: sebagian besar fungsi 'util' lama masih ada, tapi banyak yang sekarang
// jarang dipakai atau sudah ada alternatif modern (misalnya pakai template literal / backtik `${}`).
// Namun beberapa fungsi util seperti 'promisify' dan 'callbackify' masih sering digunakan.
