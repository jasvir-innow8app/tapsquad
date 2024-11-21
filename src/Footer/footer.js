import React from 'react'
import "../App.css"
import logo from "../../src/images/tapsquad-logo.png";
import facebook from "../../src/images/facebook-black.png";
import twitter from "../../src/images/twitter-black.png";
import tsBlack from "../../src/images/TS-black.png";
import youtube from "../../src/images/youtube-black.png";
const Footer = () => {
  return (
    <>
      <div className="container">
        <div class="email-section">
          <div class="email-container">

            <p class="email-text">Email ID</p>


            <div class="email-input-container">
              <input type="email" class="email-input" placeholder="Enter your email" />
            </div>
            <button class="submit-button">Submit</button>

          </div>
        </div>

      </div>

      <div className="container">
        <div className='social-media'>
          <div>
            <p>+1-234-567-8910</p>
          </div>
          <div className='social-links'>
            <img src={facebook} />
            <img src={twitter} />
            <img src={tsBlack} />
            <img src={youtube} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer">
          <div className="footer-details">
            <div>
              <p>© 2023 TapSquad. All rights reserved.</p>
            </div>
            <div>
              <img src={logo} />
            </div>
            <div className='privacy'>
              <p className='privacy-para'>Terms of Service <span>Privacy Policy</span></p>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}
export default Footer;