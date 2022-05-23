import React from "react";
import "./sass/Navbar.css";
import { FaBars } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { MdLanguage } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import Avatar from "../images/avatar.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <FaBars className="iconbar" />
      <div className="navIcon">
        <div className="notify">
          <GrNotification className="icon" />
          <span className="two">2</span>
        </div>
        <div  className="notify">
          <AiOutlineSetting className="icon" />
          <span className="two">2</span>
        </div>
        <div>
          <MdLanguage className="icon" />
        </div>
        <div>
          <img src={Avatar} className="avatar" alt="im" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
