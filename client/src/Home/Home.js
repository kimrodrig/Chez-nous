import React from 'react'
import Signup from './Signup'
import About from './About';
import Menu from './Menu';
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'


function Home() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Home