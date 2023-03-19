import React from 'react'
import './Nav.css';

import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import{RiServiceLine} from 'react-icons/ri';
import{MdPermContactCalendar} from 'react-icons/md';

import { useState } from 'react';


const Nav = () => {
  const [active,setActive] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActive("#")}  className={active === "#" ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActive("#about")} className = {active === "#about" ? 'active': ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActive("#experience")} className = {active === "#experience" ? 'active': ''}><BiBook/></a>     
      <a href="#contact" onClick={() => setActive("#contact")} className = {active === "#contact" ? 'active': ''}><MdPermContactCalendar/></a>    

    </nav>
  )
}

export default Nav