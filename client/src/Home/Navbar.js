import React from "react";
import { NavLink} from "react-router-dom";

function Navbar() {

    return (
        <div class="navbar sticky top-0 z-50 bg-[#1e1e1e]"> 
            <nav class="mx-1 text-white">
                <div 
                    class="px-5 lg:mx-32 md:mx-16 sm:mx-2 md:text-2xl py-3 flex items-center justify-between flex-row text-base italic tracking-wide"
                >
                    <NavLink to="/reservations" activeClassName="active">
                        reservations
                    </NavLink>
                    <NavLink to="/menu" activeClassName="active">
                        menu
                    </NavLink>   
                    <NavLink to="/about" activeClassName="active">
                        about
                    </NavLink>
                    <NavLink to="/gallery" activeClassName="active">
                        gallery
                    </NavLink>                   
                    <NavLink to="/signup" activeClassName="active">
                        subscribe
                    </NavLink>
                </div>
            </nav>
            

        </div>
    )
    }
    
    export default Navbar;