import {db} from "../db.js";

export const getPosts = (req, res) => {
    const q = req.query.cat 
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.send(err);

        return res.status(200).json(data);
    })
}

export const getPost = (req, res) => {

    const q = "SELECT `username`, `title`, `desc`, `img`, `cat`, `date` FROM users u JOIN posts p ON u.id===p.uid WHERE p.id = ? "
    // const q = "SELECT * FROM posts WHERE id=?"

    db.query(q, [req.params], (err, data) => {
        if (err) return res.send(err);

        return res.status(200).json(data);
    })
    
}

export const addPost = (req, res) => {
    
}

export const deletePost = (req, res) => {
    
}

export const updatePost = (req, res) => {
    
}