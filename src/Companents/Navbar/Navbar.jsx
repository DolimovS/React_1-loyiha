import  "./Navbar.css"
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";

function Navbar(){
    return(
        <div className="Navbar">
            <div className="nav_links">
                <a href="#">SHOP</a>
                <a href="#">STYLE QUIZ</a>
                <a href="#">ABOUT US</a>
                <a href="#">STORIES</a>
                <div className="nav_logo">
                    <a href="#">KINN</a>
                </div>
            </div>
            <div className="nav_icons">
            <CiUser className="nav_icon" />
            <CiSearch className="nav_icon" />
            <IoBagHandleOutline className="nav_icon"/>
            </div>
        </div>
    )
}

export default Navbar;