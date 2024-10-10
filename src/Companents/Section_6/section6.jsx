import React from "react";
import "../Section_5/section5.css"
import "./section6.css"
import img7 from "../../assets/img/img7.png"


function Section6(){
    return(
        <div className="Section6">
            <div className="section6_left">
                <h1>Your Table Your Time</h1>
                <div className="line"></div>
                <p>
                    Our modern lives keep us in constant motion. But what keeps us moving isn’t always what moves us. Our time at the table is our pause button. Meals can become moments and moments can become memories. So grab a plate, pull up a seat, and stay a while
                </p>
            </div>
            <img src={img7} alt="" />
        </div>
    )
}

export default Section6