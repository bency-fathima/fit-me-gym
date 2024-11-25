import React from "react";
import "./Hero.css";
import calories from '../assets/calories.png'
import heroimage from '../assets/hero_image.png'
import heroimageback from '../assets/hero_image_back.png'
import heart from '../assets/heart.png'
import Header from "./Header";

import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'
import Programs from "./Programs";
import Reasons from "./Reasons";
import Plans from "./Plans";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
export default function Hero() {

  const mobile=window.innerWidth<=768 ? true:false;

  const transition={type:'spring' ,duration:3}
  return (
    <div>
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div 
          initial={{left:mobile ? '165px':'238px'}}
          whileInView={{left:"8px"}}
          transition={{...transition,type:'tween'}}>
          </motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              In here, we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span><NumberCounter end={140} start={100} delay='4' prefix="+"/></span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={800} delay='4' prefix="+"/></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={1} delay='4' prefix="+"/></span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button type="button" className="btn">Get Started</button>
          <button type="button" className="btn">Learn More</button>

        </div>
      </div>
      <div className="right-h">
        <button className="btn">JOIN NOW</button>
        <motion.div className="heart-rate"
        initial={{right:"-1rem"}}
        whileInView={{right:"4rem"}}
        transition={transition}>
          <img src={heart}></img>
          <span>Heart Rate</span><span>116 bpm</span>
        </motion.div>
        <div className="hero-images">
          <img src={heroimage} className="hero-image"></img>
          < motion.img src={heroimageback} className="hero-image-back"
          
          initial={{right:"11rem"}}
          whileInView={{right:"20rem"}}
          transition={transition}
        ></motion.img>
          {/* calories image */}
          <motion.div className="calorie-image"
           initial={{right:"37rem"}}
           whileInView={{right:"28rem"}}
           transition={transition}
          >
            <img src={calories}></img>
            <div className="calory">
            <span>Calories Burned</span><span>220kcal</span>
            </div>
          </motion.div>
        </div>
        
      </div>
      </div>
 
   
    </div>
  );
}
