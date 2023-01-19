import React from 'react'
import logo from './logo.png'
import {Link} from 'react-router-dom'


function Header() {
    return (
        <div>   
            <div>
                <Link to="/">
                    <img className="logo" src={logo} alt="logo"/>
                    <div className="title -mt-3 -mb-2">
                    chez nous
                    </div> 
                    <div className="uppercase font-sans tracking-widest mb-5">
                    modern dining experience
                    </div>
                </Link>
            </div>

            <hr class="w-72 h-0.5 mx-auto my-2 border-0 rounded md:my-5 bg-gray-700"/> 
        </div>
    )
}

export default Header