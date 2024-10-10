import React from "react";
import "./section3.css"
import img2 from "../../assets/img/img2.png"
import img3 from "../../assets/img/img3.png"
import img4 from "../../assets/img/img4.png"
function Section3(){
    return(
        <div className="Section3">
            <h2>Maple Board Collection</h2>
            <div className="cards">
                <div className="card">
                    <img src={img2} alt="" />
                    <p>Maple Board - Short</p>
                    <div className="sum">$98.00</div>
                </div>
                <div className="card">
                    <img src={img3} alt="" />
                    <p>Maple Board - Short</p>
                    <div className="sum">$98.00</div>
                </div>
                <div className="card">
                    <img src={img4} alt="" />
                    <p>Maple Board - Short</p>
                    <div className="sum">$98.00</div>
                </div>
            </div>
        </div>
    )
}

export default Section3