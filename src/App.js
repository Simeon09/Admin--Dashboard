
import './App.css';
 //import Login from './Component/Login/Login';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Component/Dashboard/Dashboard';
//import MainRoute from './Component/MainRoute';
import {Routes, Route} from 'react-router-dom'
//import Sidebar from './Component/Sidebar/Sidebar'
//import Dashboard from './Component/Dashboard/Dashboard';
import Login from './Component/Login/Login';
//import Dashboard from './Component/Dashboard/Dashboard';
// import Clients from './Component/Pages/Clients/Clients';
// import Home from './Component/Pages/Home/Home'
// import Product from './Component/Pages/Product-Page/Product'
// import Logout from './Component/Pages/Logout/Logout'
// import { Redirect } from 'react-router-dom';

import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';//import MainRoute from './Component/MainRoute';
function App() {
  return (
    <div>
      {/* // <Sidebar/>

      //<MainRoute/>  */}
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route element={<ProtectedRoute/>}>

      <Route path='/*' element={<Dashboard/>}/>
      </Route>
      
      
      </Routes>
      

    </div>
  //    <Router>
  //  <Switch>
  //    <Route  path='/'>
  //       <Login/>
  //   </Route> 
  //    <Route  path='/Dashboard'>
  //       <Dashboard/> 
  //    </Route> 
  //    </ Switch>
  //  </ Router>
    //   <Route exact path='/'>
    //     <Clients/>
    //   </Route>
    //   <Route  path='/Home'>
    //     <Home/>
    //   </Route>
    //   <Route path='/product'>
    //     <Product/>
    //   </Route>
    //   <Route path='/logout'>
    //     <Logout />
    //   </Route>
      
      
      
      
      
  //   </ Switch>
  // </ Router>
  );
}

export default App;
