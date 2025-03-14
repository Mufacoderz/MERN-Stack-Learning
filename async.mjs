function samplePromise(){
    return Promise.resolve("UCUP")
}


const name = await samplePromise();
console.info(name);


// Global async/await di dalam module
// Di dalam file module (dengan ekstensi .mjs ),
// kita bisa langsung menggunakan "await" di level global tanpa perlu fungsi async.