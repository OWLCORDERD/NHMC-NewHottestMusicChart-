import React from 'react'
import './header.css'
import {Link} from "react-router-dom"

const Navbar = (props) => {
  return (
    <div className="navbar">
      <a href = "/">
      <div className="logo">
        <h1>NHMC</h1>
        <p>New Hottest Music Chart</p>
      </div>
      </a>

      <div className = "navbar-menu">
        <ul>
          <li><Link to = "/">HOME</Link></li>
          <li><a href = "#" onClick={()=>props.setPreviewClick("#prevActive")}>ABOUT</a></li>
          <li><Link to = "/News">NEWS</Link></li>
          <li><Link to = "/TrackList">TrackList</Link></li>
        </ul>
      </div>

      <div className = "hamburger-menu">
        <span></span>
        <span></span>
        <span></span>  
      </div>

    </div>
  )
}

export default Navbar