import "./FooterStyles.css";

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <div>
                      <p>BITS PILANI GOA CAMPUS</p>
                      <p>India</p>
                    </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />+91 8081053006</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />mailtosahil18@gmail.com</h4>
                </div>
            </div>
            <div className="right">
            <h4> Coding with a twist of crazy 🎶 | Cooking up code and cuisine 🍔📝 | Novels and code are my jam 📚💻 | Slam-dunking and debugging on the court 🏀🐞</h4>
              {/* <p>This is me Sahil Agarwal. CEO & Founder of my projects</p> */}
              <div className="social">
              <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} />
              <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}} />
              <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
