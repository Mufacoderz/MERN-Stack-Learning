import mysql from "mysql2"

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mufa_academy"
})

db.connect((err)=>{
    if(err){
        console.log("gagal konek")
    } else{
        console.log('berhasil konek')
    }
})

export default db