import express from "express";
import cookieParser from "cookie-parser";

import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import multer from "multer";

const app = express()

app.use(express.json())
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../frontend/public/upload') // u have to create folder in '../frontend/public/upload' //
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })
  

const upload = multer({ storage: storage })

app.post('/api/upload', upload.single('file'), function (req, res, next) {
    res.status(200).json(req.file.filename)
})
app.use("/api/posts", postRoutes)
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
//

app.listen(8800, () => {
    console.log("connected");
})