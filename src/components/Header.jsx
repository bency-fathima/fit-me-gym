import React, { useState } from 'react'
import logo from '../assets/logo.png'
import './Header.css'
import Bars from '../assets/bars.png'
export default function Header() {
  const mobile=window.innerWidth<=768 ? true:false;
const [menuOpened,setMenuOpened]=useState(false)
  return (
    <div className='header'>
        <img className='logo' src={logo}></img>
        {(menuOpened ===false && mobile ===true)?(
          <div style={{backgroundColor:'var(--appColor)',padding:'0.5rem' ,borderRadius:'5px'}} onClick={()=>setMenuOpened(true)}><img src={Bars} style={{width:'1.5rem',height:'1.5rem'}}></img></div>
        ):(
          <ul className='header-menu'>
            <li onClick={()=>setMenuOpened(false)} >Home</li>
            <li  onClick={()=>setMenuOpened(false)}>Programs</li>
            <li  onClick={()=>setMenuOpened(false)}>Why us</li>
            <li  onClick={()=>setMenuOpened(false)}>Plans</li>
            <li  onClick={()=>setMenuOpened(false)}>Testimonials</li>
        </ul>
        )}
        
     </div>
  )
}
