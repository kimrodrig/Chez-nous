import React from "react";
import { NavLink} from "react-router-dom";

function Navbar() {

    return (
        <div> 
            <nav class="ml-2 mr-2">
                <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                    <div class="flex items-center">
                        <ul class="flex-1 flex-row mt-0 px-10 space-x-12 font-sans text-lg">
                    
                            <NavLink class="hover:font-bold" exact="true" to="/" >
                                Signup
                            </NavLink>
                            <NavLink class="hover:font-bold" to="/about">
                                About
                            </NavLink>
                            <NavLink class="hover:font-bold" to="/menu">
                                Menu
                            </NavLink>                  
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
    }
    
    export default Navbar;