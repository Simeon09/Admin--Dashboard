import React, {useState} from 'react'

import './sass/sidebar.css'
import { FaProductHunt } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import {AiOutlineTeam } from "react-icons/ai";
import {AiOutlineLogout } from "react-icons/ai";
import {AiFillHome } from "react-icons/ai";
import {Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";


const Sidebar = () => {
  
  return (
    <div>
    <div className="dashBoard-sidebar">
    
      <h3>Welcome simeon</h3>
      <div className="main-sidebarContent">

      <Link className='links' to='/Home'>
        <span className="iconName active">
          <AiFillHome /> <p>Home</p>
        </span>
      </Link>
      <Link className='links' to='/Clients'>
        <span>
          <FaUserFriends /> <p>Client</p>
        </span>
      </Link>
      <Link className='links' to='/Product'>
        <span>
          <FaProductHunt /> <p>Product</p>
        </span>
      </Link>
      <Link className='links' to='/Team'>
        <span>
          <AiOutlineTeam/> <p>Team</p>
        </span>
      </Link>
      <Link  className='links' to='/'>
        <span>
          <AiOutlineLogout /> <p>Log out</p>
        </span>
      </Link>
      </div>
      
    </div>
    </div>
  )
}

export default Sidebar