import { db } from "../db.js"
import bcrypt from "bcryptjs";

export const register = (req, res) => {

    //CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"  // users mean tablename

    db.query(q, [req.body.email, req.body.name], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists!");

        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`, `email`,`password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created.");
        })
    })
}

export const login = (req, res) => {
    //CHECK USER
    const q = "SELECT * FROM users WHERE username = ?" // users mean tablename
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length === 0) return res.status(404).json("User not found!")

        //CHECK password
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password); // trueorfalse data[0].password->server saved pw and req.body.password -> user FE typed pw
        if (!isPasswordCorrect) return res.status(400).json("Wrong username or password!")
    })

//
}

export const logout = (req, res) => {

}