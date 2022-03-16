import React from 'react'
import {NavLink} from "react-router-dom"
import Style from './Navbar.module.scss'
import Toggler from "./Toggler"
import ClassNames from "classnames";
import {info} from "../Info/info";



export default function Navbar({darkMode, handleClick}) {
  return (
    <nav  className={ClassNames(Style.navList)}>
        <ul>
            <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/about'>About Me</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/'><span className={Style.log}>{info.initials}</span></NavLink></li>
            <li><NavLink exact activeClassName="current" to='/portfolio'>Portfolio</NavLink></li>
            <button className={ClassNames(Style.button)}><NavLink exact activeClassName="current" to='/contact'>Contact Me</NavLink></button>
            {/* //<Toggler darkMode={darkMode} handleClick={handleClick}/> */}
        </ul>
    </nav>
  )
}
