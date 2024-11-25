import React from 'react'
import './Plans.css'
import whiteTick from '../assets/whiteTick.png'
import {plansData} from '../data/plansData.jsx'
export default function Plans() {
  return (
    <div className='plans-container'>
        <div className="blur plans-blur1"></div>
        <div className="blur plans-blur2"></div>

        <div className='plan-header' style={{gap:'2rem'}}>
            <span className='stroke-text'>READY TO START </span><span>YOUR JOURNEY</span><span className='stroke-text'>NOW WITH US</span>
        </div>
      <div className='plans'>
        {plansData.map(plans=>(
            <div className='plan'>{plans.icon}
                 <span >{plans.name}</span>
                <span >${plans.price}</span>
                <div className='features'>
                    {plans.features.map((feature,i)=>(
                        <div className='feature'>
                            <img src={whiteTick}/>
                            <span key={i} >{feature}</span>
                            </div>
                    ))}
                </div>
                <div className=''>
                    <span>see more benefits -> </span>
                </div>
                <button type='button' className='btn'>join now </button>
            </div>
        ))}

      </div>
    </div>
  )
}
