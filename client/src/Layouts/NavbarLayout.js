import { Outlet } from "react-router-dom";
import Header from "../Header"; 
import Navbar from "../Home/Navbar";
import Footer from "../Footer";

const NavbarLayout = () => {
    document.body.style.backgroundColor = "#1e1e1e;"
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