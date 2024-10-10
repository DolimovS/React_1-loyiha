import React from "react";
import "./section8.css"
import img8 from "../../assets/img/img8.png"
import img9 from "../../assets/img/img9.png"
import img10 from "../../assets/img/img10.png"
import img11 from "../../assets/img/img11.png"


function Section8(){
    return(
        <div className="Section8">
            <h1>#KinnMoments</h1>
            <div className="section8_img">
                <a href="#"><img src={img8} alt="" /></a>
                <a href="#"><img src={img9} alt="" /></a>
                <a href="#"><img src={img10} alt="" /></a>
                <a href="#"><img src={img11} alt="" /></a>
            </div>
        </div>
    )
}

export default Section8