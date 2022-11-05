import {db} from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
    const q = req.query.cat 
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    })
}

export const getPost = (req, res) => {

    const q = "SELECT `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ? "

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        console.log('data', data)
        return res.status(200).json(data[0]);

        // we get array thats why we get 0 index of the array
        //[
        //     RowDataPacket {
        //       username: 'Indu',
        //       title: 'first',
        //       desc: 'hello',
        //       img: 'https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png',
        //       cat: 'art',
        //       date: null
        //     }
        //   ]
    })
    
} 

export const addPost = (req, res) => {
    
}

export const deletePost = (req, res) => {
    
}

export const updatePost = (req, res) => {
    
}