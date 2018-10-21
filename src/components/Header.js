import React from 'react'
// import { Link } from 'react-router-dom'
import "./assets/css/App.css";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <div className="subpage">
    <header id="header">
      <div class="inner">
        <a href="/home" class="logo"><strong>Projection</strong> by TEMPLATED</a>
        <nav id="nav">
          <a href="/home">Home</a>
          <a href="/generic">Generic</a>
          <a href="/elements">Elements</a>
          <a href="/leftsidebar">Left Sidebar</a>
			  	<a href="/rightsidebar">Right Sidebar</a>
				  <a href="/nosidebar">No Sidebar</a>
          <a href="/loginsignup">SignUp/Login </a>
        </nav>
        <a href="#navPanel" class="navPanelToggle"><span class="fa fa-bars"></span></a>
      </div>
    </header>
  </div>
)

export default Header
