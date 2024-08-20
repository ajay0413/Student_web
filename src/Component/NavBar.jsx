import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo/logo.png'
import hamicon from '../assets/icons/icons8-hamburger-48.png'
import '../App.css'


export default function NavBar() {
  const[size,setsize] = useState(true)

  // useEffect(()=>{
   
  //    if(window.innerWidth>768){
  //     setsize(false)
  //    }
    
  // })
  return (
    <div className='nav' >
      <img src={Logo} alt="" className='logo' />
      <ul className='menu'>
      <li><a href='' className='navlink'>HOME</a></li>
      <li ><a href='' className='navlink'>ACCELERATE</a></li>
      <li><a href='' className='navlink'>BLOG</a></li>
      <li><a href='' className='navlink'>ADMISSIONS</a></li>
      <li><a href='' className='navlink'>ABOUT US</a></li>
      
      </ul>
    <span  className='ham'> <img src={hamicon} alt="" className='hamimg'/></span>

   

      
      
      
    </div>
  )
}
