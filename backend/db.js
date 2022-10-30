import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"1234",
    port: "3300",
    database:"blog"
})