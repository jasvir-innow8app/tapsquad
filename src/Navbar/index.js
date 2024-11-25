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
  const handleLogoClick = () => {
    navigate("/"); // Navigate to the home page
  };

  const handleScroll = () => {
    const section = document.getElementById("our-Work");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    const section = document.getElementById("about-us");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className='sticky-header'>
        {/* <header className='navbar'> */}
        <div>
          <img className="tapsquad-logo" onClick={handleLogoClick} src={logo} />
        </div>
        <div className='nav-items'>
          <ul className='nav-links'>
            <li onClick={scrollDown}>About</li>
            <li onClick={handleScroll}>Our Work</li>
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