
const buffer = Buffer.from('muh fadil'); // Harus "Buffer" bukan "buffer"

console.info(buffer); // Menampilkan representasi biner dari Buffer
console.info(buffer.toString()); // Mengubah Buffer ke string dan menampilkannya

// Membalik urutan byte dalam buffer secara manual
const reversedBuffer = Buffer.from([...buffer].reverse());

console.info(reversedBuffer.toString()); // Menampilkan string setelah dibalik
