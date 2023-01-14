import React from "react";
import { NavLink} from "react-router-dom";

function Navbar() {

    return (
        <div> 
            <nav class="ml-2 mr-2">
                <div class="max-w-screen-xl px-5 py-3 mx-auto md:px-6">
                    <div class="flex items-center">
                        <ul class="flex-1 flex-row mt-0 px-8 space-x-8 font-['Lato'] text-xl italic py-2.5 rounded shadow-md">
                            <NavLink exact="true" to="/" >
                                signup
                            </NavLink>
                            <NavLink to="/about">
                                about
                            </NavLink>
                            <NavLink to="/menu">
                                menu
                            </NavLink>   
                            <NavLink to="/reservations">
                                reservations
                            </NavLink>               
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
    }
    
    export default Navbar;