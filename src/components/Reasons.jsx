import React from "react";
import "./Reasons.css";
import tick from "../assets/tick.png";
import adidas from "../assets/adidas.png";
import nb from "../assets/nb.png";

import nike from "../assets/nike.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={image1} />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <div>
          <span className="stroke-text">WHY</span>
          <span> CHOOSE US</span>
        </div>
        {/* div(div>img*span)*4 */}
        <div className="details-r">
        <div>
          <img src={tick} alt=""></img>
          <span>OVER 140+ EXPERT COACHES</span>
        </div>
        <div>
          <img src={tick} alt="" />
          <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
        </div>
        <div>
          <img src={tick} alt="" />
          <span>1 FREE PROGRAM TO NEW MEMBER</span>
        </div>
        <div>
          <img src={tick} alt="" />
          <span>RELIABLE MEMBERS</span>
        </div>
        <span style={{color:"var(--gray)",fontWeight:"normal",fontSize:'15px'}}>OUR PARTNERS</span>
        <div className="partners"> 
            <img src={nb} alt="" /><img src={adidas} alt="" /><img src={nike} alt="" />
         </div>
        </div>
        
      </div>
    </div>
  );
};

export default Reasons;
