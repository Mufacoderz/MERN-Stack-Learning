import {Console} from 'console'
import fs from 'fs'

const logFile = fs.createWriteStream('aplication.log')

const log = new Console({
    stdout: logFile,
    stderr: logFile
})

log.info("hello gayss")
log.error("anying error")

const person = {
    firstname: 'Lelouch',
    lastname: 'lamprouge'
}

log.table(person)