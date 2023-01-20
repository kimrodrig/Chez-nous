import { Outlet } from "react-router-dom";
import Header from "../Header"; 
import Navbar from "../Home/Navbar";
import Footer from "../Footer";

const NavbarLayout = () => {
    document.body.style.backgroundColor = "#1e1e1e;"
    return (
        <div>
            <Navbar/>
            <Header />
            <div className="flex justify-center">
                <Outlet />

            </div>
            <Footer />
        </div>
    );
};

export default NavbarLayout;