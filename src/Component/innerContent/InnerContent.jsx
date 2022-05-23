import React from 'react'
import {Outlet} from 'react-router-dom';
const InnerContent = () => {
  return (
    <div>
         <Outlet/>
      this d innercontent
    </div>
  )
}

export default InnerContent