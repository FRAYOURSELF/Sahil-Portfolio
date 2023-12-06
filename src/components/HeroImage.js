import "./HeroImageStyles.css";
import React from 'react'
import IntroImg from "../assets/intro.jpg";
import {Link} from "react-router-dom";
const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"
            src={IntroImg} alt="IntoImg" />
        </div>
      
    </div>
  )
}

export default HeroImage
 