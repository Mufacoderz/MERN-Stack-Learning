function samplePromise(){
    return Promise.resolve("UCUP")
}

async function run() {
    const name = await samplePromise();
    console.info(name);
}

run()