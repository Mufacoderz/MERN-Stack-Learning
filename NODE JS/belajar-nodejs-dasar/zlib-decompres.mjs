import fs from 'fs'
import zlib, { gzip } from 'zlib'

const source= fs.readFileSync('zlib-compres.mjs.txt')
console.info(source.toString())


const result = zlib.unzipSync(source)
console.info(result.toString())