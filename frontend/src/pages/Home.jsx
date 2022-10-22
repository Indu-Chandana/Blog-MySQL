import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "hello hello hello",
      desc: "hello hello hello hello hello hello hello hello hello",
      img: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png"
    },
    {
      id: 2,
      title: "hello hello hello",
      desc: "hello hello hello hello hello hello hello hello hello",
      img: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png"
    },
    {
      id: 3,
      title: "hello hello hello",
      desc: "hello hello hello hello hello hello hello hello hello",
      img: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png"
    },
    {
      id: 4,
      title: "hello hello hello",
      desc: "hello hello hello hello hello hello hello hello hello",
      img: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png"
    },
  ]

  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>

            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>

          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Home