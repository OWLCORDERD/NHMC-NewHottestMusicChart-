import React from 'react'
import './header.css'
import {Link} from "react-router-dom"

const Navbar = (props) => {
  return (
    <div className="navbar">
    <div className="logo">
      <h1>NHMC</h1>
      <p>New Hottest Music Chart</p>
    </div>

    <div className = "navbar-menu">
      <ul>
        <li><a href = "/">HOME</a></li>
        <li><a href = "#" onClick={()=>props.setPreviewClick("#prevActive")}>ABOUT</a></li>
        <li><a href = "#">NEWS</a></li>
        <li><Link to = "/TrackList">TrackList</Link></li>
      </ul>
    </div>

  </div>
  )
}

export default Navbar