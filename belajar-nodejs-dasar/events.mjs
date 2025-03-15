
import { EventEmitter } from 'events';

// Membuat instance baru dari EventEmitter
const emitter = new EventEmitter();

// Menambahkan event listener untuk event 'hello'
// Saat event 'hello' dipancarkan, callback akan dipanggil dengan parameter 'name'
emitter.addListener("hello", name => {
    console.info(`hello ${name}`); // Menampilkan pesan ke konsol
});

// Memancarkan event 'hello' dengan argumen "ucup"
// Ini akan memicu semua listener yang terdaftar untuk event 'hello'
emitter.emit("hello", "ucup"); 

// Output yang akan muncul di konsol:
// hello ucup
