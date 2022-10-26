import React from 'react'
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  //
  return (
    <div className='single'>
      <div className='content'>
        <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png" alt="" />
        <div className="user">
          <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png" alt="" />
          <div className='info'>
            <span>Jhon</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>

            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>hello hello hello hello hello hello hello hello hello hello hello</h1>
        <p> hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello helloscsdacdsvsscd
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello

        </p>
      </div>

<Menu/>
      
    </div>
  )
}

export default Single