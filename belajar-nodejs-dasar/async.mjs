function samplePromise(){
    return Promise.resolve("UCUP")
}

async function run() {
    console.info(name);
    const name = await samplePromise();
}

run()