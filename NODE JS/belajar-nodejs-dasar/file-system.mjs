import fs from "fs/promises";

const buffer = await fs.readFile("file-system.mjs"); //membaca file lalu disimpan ke buffer

console.info(buffer.toString());

await fs.writeFile("temp.txt", "Hello world");

//file system sebuah modul yg digunakan untuk memanipulasi/mengolah data file sistem