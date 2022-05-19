import React from "react";
//import Home from "../Pages/Home/Home";
// import Client from "../Pages/Clients/Clients";
// import Product from "../Pages/Product-Page/Product";
// import Team from "../Pages/Team Members/Team";
// import Logout from "../Pages/Logout/Logout";
// import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import "./sass/Dashboard.css";
import { FaProductHunt } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import {AiOutlineTeam } from "react-icons/ai";
import {AiOutlineLogout } from "react-icons/ai";
import {AiFillHome } from "react-icons/ai";
import Avatar from '../images/avatar.png'
const Dashboard = () => {
  // const location = useLocation.pathname;
  // const [path, setpath] = useState('')

  // const changePathAndClose = (path) =>{
  //   setpath(path);
  // }
  // useEffect(() => {
  //   setpath(location)

  // }, [location])

  return (
    <div className="wholeDashboard">
      <div className="dashBoard-sidebar">
        <img src={Avatar} className="avatar" alt="im" />
        <h3>Welcome simeon</h3>
        <div className="main-sidebarContent">

        <span className="iconName">
          <AiFillHome /> <p>Home</p>
        </span>
        <span>
          <FaUserFriends /> <p>Client</p>
        </span>
        <span>
          <FaProductHunt /> <p>Products</p>
        </span>
        <span>
          <AiOutlineTeam/> <p>Team</p>
        </span>
        <span>
          <AiOutlineLogout /> <p>Log out</p>
        </span>
        </div>
        
      </div>
      <div>

      </div>
    </div>
  );
};

export default Dashboard;
