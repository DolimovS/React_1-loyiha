import React from "react";
import "./footer.css"
import { TbBrandFacebookFilled } from "react-icons/tb";
import { IoLogoPinterest } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";


function Footer(){
    return(
        <div className="Footer">
            <div className="footer_left">
                <div className="footer_logo">
                <h1>© 2021  Kinn Home</h1>
                    <div className="line_3"></div>
                    <p>Need to get in touch? Just email us <br /> 
                        at hello@kinnhome.co</p>
                </div>
                <div className="footer_links">
                    <div className="footer_link">
                        <a href="#">EXPLORE</a>
                        <div className="line_3"></div>
                        <a href="#">SHOP</a>
                        <a href="#">STYLE QUIZ</a>
                        <a href="#">ABOUT US</a>
                        <a href="#">STORIES</a>
                    </div>
                    <div className="footer_link">
                        <a href="#">HELP</a>
                        <div className="line_3"></div>
                        <a href="#">FAQS+SHOPPING</a>
                        <a href="#">CONTACT</a>
                        <a href="#">TEERMS</a>
                        <a href="#">TRADE</a>
                    </div>
                </div>
            </div>
            <div className="footer_right">
                <a href="#"><TbBrandFacebookFilled className="footer_icon" color="black" /></a>
                <a href="#"><IoLogoPinterest className="footer_icon" color="black"  /></a>
                <a href="#"><FaInstagram className="footer_icon"  color="black"  /></a>
            
            
            
            </div>
        </div>
    )
}

export default Footer