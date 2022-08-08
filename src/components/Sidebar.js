import React from 'react'

import "./styles/sidebar.css"
// import CloseIcon from "./assets/shared/icon-close.svg"
import MenuLinks from "./menuData"

export default function Sidebar( props ) {
  return (
    <div className='sidebar'>
        <div className='closeContainer' onClick={() => props.updateSidebarState(false)}>
            <img src="./assets/shared/icon-close.svg" alt="Close Icon"></img>
        </div>
        <div className="menuLinksContainer">
            <ul className='menuLinks'>
                {MenuLinks.map(link => 
                <li className={props.currentState === link.toLowerCase() ? 'link sidebarActive' : 'link'} onClick={() => {
                  props.updateParentState(link.toLowerCase());
                  props.updateSidebarState(false);}}>
                    {link.toUpperCase()}
                </li>)}
            </ul>
        </div>
    </div>
  )
}
