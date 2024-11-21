import React from 'react'
import "../App.css"
import navbarIcon from "../../src/images/navbar-icon.png"
import { useNavigate } from 'react-router-dom';
import logo from "../../src/images/tapsquad-logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigate = (data) => {
    navigate(`/${data}`)
  }
  return (
    <>
      <div className='sticky-header'>
        {/* <header className='navbar'> */}
        <div>
          <img src={logo} />
        </div>
        <div className='nav-items'>
          <ul className='nav-links'>
            <li>About</li>
            <li >Our Work</li>
            <li onClick={() => handleNavigate("contact")}>Contact</li>

          </ul>

          <button className='btn' onClick={() => handleNavigate("contact")}>Contact us</button>
        </div>
        <img className='menu-icon' src={navbarIcon} />
        {/* </header> */}
      </div >
    </>
  )
}

export default Navbar;