import React, { useState } from 'react';
import "../App.css"
import navbarIcon from "../../src/images/navbar-icon.png"
import { useNavigate } from 'react-router-dom';
import logo from "../../src/images/tapsquad-logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleNavigate = (data) => {
    navigate(`/${data}`);
    setIsMenuOpen(false);
  }
  const handleLogoClick = () => {
    navigate("/"); // Navigate to the home page
    setIsMenuOpen(false);
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
    setIsMenuOpen(false);
  };
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu visibility
  };
  return (
    <>
      <div className='sticky-header'>
        {/* <header className='navbar'> */}
        <div>
          <img className="tapsquad-logo" onClick={handleLogoClick} src={logo} />
        </div>
        <div className={`nav-item ${isMenuOpen ? "open" : ""}`}>
          <div className='nav-items'>

            <ul className='nav-links'>
              <li onClick={scrollDown}>About</li>
              <li onClick={handleScroll}>Our Work</li>
              <li onClick={() => handleNavigate("contact")}>Contact</li>

            </ul>

            <button className='btn' onClick={() => handleNavigate("contact")}>Contact us</button>
          </div>
        </div>
        <img
          className='menu-icon'
          src={navbarIcon}
          alt="Menu Icon"
          onClick={toggleMenu}
        />
        {/* </header> */}
      </div >
    </>
  )
}

export default Navbar;