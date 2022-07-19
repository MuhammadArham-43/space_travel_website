import React, { useState } from 'react'

import "./styles/navbar.css";
// import Logo from "../assets/shared/logo.svg"
// import HamburgerIcon from "../assets/shared/icon-hamburger.svg"
import MenuLinks from "./menuData"
import Sidebar from "./Sidebar"

export default function Navbar( props ) {

    const [showSidebar, setShowSidebar] = useState(false);
    console.log(MenuLinks);
    // const menuLinks = ['Home', 'Destination', 'Crew', 'Technology'];


    const updateSidebarState = (value) => setShowSidebar(value);

    return (
    <>
    <nav>
        <div className='logo'>
            <img src="./assets/shared/logo.svg" alt="logo"></img>
        </div>
        
        <div className='navMenu'>
            <ul>
                {MenuLinks.map((link, index) => <li className={props.currentState === link.toLowerCase()? "navLink navActive" : "navLink"} onClick={() => props.updateParentState(link.toLocaleLowerCase())}><span className='span_index'><strong>0{index}</strong></span> {link.toUpperCase()}</li>)}
            </ul>
        </div>
        
        <div className='hamburgerIcon'>
            <img src="./assets/shared/icon-hamburger.svg" alt='hamIcon' onClick={() => updateSidebarState(true)} ></img>
        </div>
    </nav>
    
    { showSidebar ? <Sidebar currentState={props.currentState} updateParentState={props.updateParentState} updateSidebarState={updateSidebarState} /> : <></> }
    
    </>
    )
}
