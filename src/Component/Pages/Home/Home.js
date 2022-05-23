import React from 'react'
//import Navbar from '../../Navbar/Navbar'
import './sass/home.css'
import { AiOutlineArrowDown } from "react-icons/ai";
const Home= () => {
  return (
    <div className='Home'>
        <h2>
    
        Overview
        </h2>
      <div className='rate'>
        <div className='mainBox'>
        <h4>Total Profit</h4>
        <div className='Rate'>
        <span>$95,595 </span>
          <span>-3.55%  <AiOutlineArrowDown/></span>
        </div>
        </div>
        <div className='mainBox'>
        <h4>Total Profit</h4>
        <div className='Rate'>
        <span>$95,595 </span>
          <span>-3.55%  <AiOutlineArrowDown/></span>
        </div> 
        </div>
        <div className='mainBox'>
        <h4>Total Profit</h4>
        <div className='Rate'>
        <span>$95,595 </span>
          <span>-3.55%  <AiOutlineArrowDown/></span>
        </div>
        </div>
        </div>
        </div>
    
  )
}

export default Home