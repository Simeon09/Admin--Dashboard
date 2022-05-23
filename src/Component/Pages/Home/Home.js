import React from "react";
//import Navbar from '../../Navbar/Navbar'
import "./sass/home.css";
import Recharts from '../Recharts/Recharts'
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
const Home = () => {
  return (
    <div className="Home">
      <h2>Overview</h2>
      <div className="rate">
        <div className="mainBox">
          <h4>Total Profit</h4>
          <div className="Rate">
            <span >$95,595 </span>
            <span className="up">
              +3.55%  <AiOutlineArrowUp/>
            </span>
          </div>
        </div>
        <div className="mainBox">
          <h4>Total Expensis</h4>
          <div className="Rate">
            <span>$95,595 </span>
            <span className="up">
              +3.67% <AiOutlineArrowUp/>
            </span>
          </div>
        </div>
        <div className="mainBox">
          <h4>New Users</h4>
          <div className="Rate">
            <span>$95,595 </span>
            <span className="down">
              -3.55% <AiOutlineArrowDown />
            </span>
          </div>
        </div>
      </div>
      <Recharts/>
    </div>
  );
};

export default Home;
