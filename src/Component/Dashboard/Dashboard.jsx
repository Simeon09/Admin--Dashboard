import React from "react";
import MainRoute from "../MainRoute";
import Sidebar from "../Sidebar/Sidebar";
// import { FaBars } from "react-icons/fa";

import { MdLanguage, MdNotificationsNone, MdSettings } from "react-icons/md";

import Avatar from "../images/avatar.png";
//import {Outlet} from 'react-router-dom';
// import Home from "../Pages/Home/Home";
// import Client from "../Pages/Clients/Clients";
// import Product from "../Pages/Product-Page/Product";
// import Team from "../Pages/Team Members/Team";
// import Logout from "../Pages/Logout/Logout";
// import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import "./sass/Dashboard.css";
//import {Routes, Route} from 'react-router-dom'
import Navbar from "../Navbar/Navbar";

// import Clients from '../Pages/Clients/Clients';
// import Home from '../Pages/Home/Home'
// import Product from '../Pages/Product-Page/Product'
// import Logout from '../Pages/Logout/Logout'
//import Sidebar from "../Sidebar/Sidebar";
//import { Outlet } from "react-router-dom";

//import Clients from "../Pages/Clients/Clients";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";
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
    //  <div >
    //    <Navbar/>

    //    <MainRoute/>

    //  </div>
    <>
      <div className="header">
        <div>
          {/* <FaBars className="iconbar" /> */}
          <h2>ADMIN</h2>
        </div>
        <div className="navIcon">
          <div className="notify">
            <MdNotificationsNone className="icons" />
            <span className="two">2</span>
          </div>
          <div className="notify">
            <MdSettings className="icons" />
            <span className="two">2</span>
          </div>
          <div>
            <MdLanguage className="icons" />
          </div>
          <div>
            <img src={Avatar} className="avatar" alt="im" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="side">
          <Sidebar />
        </div>
        <MainRoute />
      </div>
    </>
  );
};

export default Dashboard;
