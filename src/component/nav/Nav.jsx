import React, { useState } from 'react'

import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {MdCastForEducation} from "react-icons/md"
import {MdOutlineConnectWithoutContact} from "react-icons/md"


const Nav = () => {
  const [activeNav,setActiveNav]=useState("#home")
  return (
    <nav className='nav-bar'>
      <a href='#home' onClick={()=>{setActiveNav("#home")}} className={activeNav==="#home" ? 'active': ''}><AiOutlineHome /></a>
      <a href='#about' onClick={()=>{setActiveNav("#about")}} className={activeNav==="#about" ? 'active': ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={()=>{setActiveNav("#experience")}} className={activeNav==="#experience" ? 'active': ''}><BiBook /></a>
      <a href='#education' onClick={()=>{setActiveNav("#education")}} className={activeNav==="#education" ? 'active': ''}><MdCastForEducation /></a>
      <a href='#contact' onClick={()=>{setActiveNav("#contact")}} className={activeNav==="#contact" ? 'active': ''}><MdOutlineConnectWithoutContact /></a>

    </nav>
  )
}

export default Nav