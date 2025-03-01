import React, { useState } from "react";
import "./Testimonials.css";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import { testimonialsData } from "../data/testimonialsData.jsx";


import {motion} from 'framer-motion'

export default function Testimonials() {

  const transition={type:"spring",duration:3}
  const [selected, setselected] = useState(0);
  const tlength = testimonialsData.length;
  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:'1',x:0}}
        transition={{...transition,duration:2}}
        ></motion.div>
          <motion.div
        initial={{opacity:0,x:100}}
        whileInView={{opacity:'1',x:0}}
        transition={{...transition,duration:2}}
        ></motion.div>
        <img src={testimonialsData[selected].image} />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setselected(tlength - 1)
                : setselected((prev) => prev - 1);
            }}
            src={leftArrow}
          />
          <img onClick={()=>{selected===tlength-1 ?setselected[0] : setselected((prev)=>prev+1)
          }} src={rightArrow} />
        </div>
      </div>
    </div>
  );
}
