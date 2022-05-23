import React from "react";
import MainRoute from "../MainRoute";
import Sidebar from "../Sidebar/Sidebar";
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
    
     <div >
       <Sidebar/>
       <Navbar/>

       <MainRoute/>
    
     </div>
      


      
      
   
  );
};

export default Dashboard;
