import React from 'react'
import './Programs.css'
import rightArrow from '../assets/rightArrow.png'
import {programsData} from '../data/programsData.jsx'


export default function Programs() {
  return (
    <div className='programs' id='programs'>
        <div className='program-header'>
            <span className='stroke-text'>Explore our </span><span>programs</span><span className='stroke-text'> to shape you</span>
        </div>
        <div className='program-categories'>
            {programsData.map(program=>(
                <div className='category'>{program.image}
                    <span className='program-title'>{program.heading}</span>
                    <span className='program-description'>{program.details}</span>
                    <div className="join-now"><span>JOIN NOW</span><img src={rightArrow}></img></div>
                 </div>
            ))}
        </div>
     </div>
  )
}
