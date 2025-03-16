import fs from 'fs'

const writter = fs.createWriteStream('target.log')

writter.write("faduil\n")
writter.write("uddufoh\n")
writter.write("ddef\n")
writter.end()

const reader = fs.createReadStream('target.log')

reader.addListener("data", (data) => {
    console.info(data.toString())
})