// const fs = require('fs') // core module
// const cetakNama = require('./coba.js'); // local module
// const moment = require('moment') //third oarty module //npm module //node module



const coba = require('./coba.js'); 


console.log(
    coba.cetakNama("fadil"),
    coba.PI,
    coba.mahasiswa.cetakMhs(),
    new coba.Orang
);
