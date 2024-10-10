import React from "react";
import "./section2.css"
import { GoArrowRight } from "react-icons/go";

function Section2(){
    return (
        <div className="Section2">
            <h1>If your happy place is at the dinner table, we <br />
            totally get that. That’s why we created products <br />
            to help you find slow moments in a fast world.</h1>
            <div className="section2_links">
                <a href="#">Shop All <GoArrowRight /></a>
                <a href="#">Read Stories <GoArrowRight /></a>
            </div>
        </div>
    )
}

export default Section2