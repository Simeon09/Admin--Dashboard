import React from 'react'
//import Dashboard from './Dashboard/Dashboard'
import Home from './Pages/Home/Home'
import Clients from './Pages/Clients/Clients'
import Logout from './Pages/Logout/Logout'
import Product from  './Pages/Product-Page/Product'
import InnerContent from './innerContent/InnerContent'
import Team from './Pages/Team Members/Team'
import {Routes, Route} from 'react-router-dom'


const MainRoute = () => {
  return (
    <div>
        <Routes>
         <Route path='/' element={< InnerContent />}/>
        <Route path='/Home' element={<Home/>}/>
        {/* <Route path='/Dashboard' element={<Dashboard/>}/> */}
        <Route path='/Clients' element={<Clients/>}/>
         <Route path='/Product' element={<Product/>}/>
         <Route path='/Team' element={<Team/>}/>
         <Route path='/' element={<Logout/>}/>
        </Routes>
    </div>
  )
}

export default MainRoute 