import React from 'react'
import './Loading.css';
import { Link } from 'react-router-dom';


function Loading() {
  return (
    <div className='loading-container'>
        <Link to='/homepage'>
            <button className='start-button'>
                START
            </button>
        </Link>
    </div>
  )
}

export default Loading