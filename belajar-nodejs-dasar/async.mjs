function samplePromise(){
    return Promise.resolve("UCUP")
}

async function run() {
    console.info(name);
    const name = await samplePromise();
}

run()

// Global async/await di dalam module
// Di dalam file module (dengan ekstensi .mjs ), kita bisa langsung menggunakan "await" di level global tanpa perlu fungsi async.