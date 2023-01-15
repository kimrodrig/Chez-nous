import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'


function Home() {
  return (
    <div>
        <Navbar/>
        <br/>
        <Outlet/>
    </div>
  )
}

export default Home