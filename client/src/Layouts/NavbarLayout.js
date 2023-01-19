import { Outlet } from "react-router-dom";
import Header from "../Header"; 
import Navbar from "../Home/Navbar";
import Footer from "../Footer";

const NavbarLayout = () => {
    return (
        <div className="pb-3">
            <Header />
            <Navbar/>
            <Outlet />
            <Footer />
        </div>
    );
};

export default NavbarLayout;