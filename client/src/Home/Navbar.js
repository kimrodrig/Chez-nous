import React from "react";
import { NavLink} from "react-router-dom";

function Navbar() {

    return (
        <div> 
            <nav class="ml-2 mr-2 text-white">
                <div class="max-w-screen-xl px-5 py-3 mx-auto md:px-6">
                    <div class="flex items-center">
                        <ul class="flex-1 flex-row mt-0 space-x-4 text-base italic tracking-wide">
                            <NavLink to="/signup" >
                                signup
                            </NavLink>
                            <NavLink to="/about">
                                about
                            </NavLink>
                            <NavLink to="/menu">
                                menus
                            </NavLink>   
                            <NavLink to="/reservations">
                                reservations
                            </NavLink>
                            <NavLink to="/gallery">
                                gallery
                            </NavLink>                   
                        </ul>
                    </div>
                </div>
            </nav>
            

        </div>
    )
    }
    
    export default Navbar;