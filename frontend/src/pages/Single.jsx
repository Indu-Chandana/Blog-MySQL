import React from 'react'
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link, useLocation } from 'react-router-dom';
import Menu from '../components/Menu';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import moment from "moment"
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Single = () => {

  const [post, setPost] = useState({});

  const location = useLocation()
  const postId = location.pathname.split("/")[2]

  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();

  }, [postId])
  //
  return (
    <div className='single'>
      <div className='content'>
        <img src={post?.img} alt="" />
        <div className="user">
          <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png" alt="" />
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>

          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
              </Link>

              <img src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
       {/* We are using rich editor. It allready has <P></P> tag */}
       {post.deac} 
      </div>

      <Menu />

    </div>
  )
}

export default Single