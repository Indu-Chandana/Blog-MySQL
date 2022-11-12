import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

const Menu = ({cat}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/?cat=${cat}`);
                setPosts(res.data);
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [cat])
    // const posts = [
    //     {
    //         id: 1,
    //         title: "hello hello hello",
    //         desc: "hello hello hello hello hello hello hello hello hello",
    //         img: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png"
    //     },
    //     {
    //         id: 2,
    //         title: "hello hello hello",
    //         desc: "hello hello hello hello hello hello hello hello hello",
    //         img: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png"
    //     },
    //     {
    //         id: 3,
    //         title: "hello hello hello",
    //         desc: "hello hello hello hello hello hello hello hello hello",
    //         img: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png"
    //     },
    //     {
    //         id: 4,
    //         title: "hello hello hello",
    //         desc: "hello hello hello hello hello hello hello hello hello",
    //         img: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png"
    //     },
    // ]

    return (
        <div className='menu'>
            <h1>Other posts you may like</h1>
            {posts.map(post => (
                <div className='post' key={post.id}>
                    <img src={`../upload/${post.img}`} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}

        </div>
    )
}

export default Menu