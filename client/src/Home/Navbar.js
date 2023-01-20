import React from "react";
import { NavLink} from "react-router-dom";

function Navbar() {

    return (
        <div class="navbar sticky top-0 z-50 bg-[#1e1e1e]"> 
            <nav class="mx-1 text-white">
                <div 
                    class="px-5 lg:mx-32 md:mx-16 sm:mx-2 md:text-2xl py-3 flex items-center justify-between flex-row text-base italic tracking-wide"
                >
                    <NavLink to="/reservations">
                        reservations
                    </NavLink>
                    <NavLink to="/menu">
                        menu
                    </NavLink>   
                    <NavLink to="/about">
                        about
                    </NavLink>
                    <NavLink to="/gallery">
                        gallery
                    </NavLink>                   
                    <NavLink to="/signup" >
                        subscribe
                    </NavLink>
                </div>
            </nav>
            

        </div>
    )
    }
    
    export default Navbar;