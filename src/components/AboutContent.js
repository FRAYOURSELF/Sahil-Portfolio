import "./AboutContentStyles.css";
import React from 'react'
import {Link} from "react-router-dom";
import react1 from "../assets/intro.jpg";
import react2 from "../assets/intro.jpg";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>Im a react front-end developer. I
                create responsive secure websites for my clients.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={react1} className="img" alt="true"></img>
            </div>
            <div className="img-stack bottom">
                <img src={react2} className="img" alt="true"></img>
            </div>
        </div>

      </div>
    </div>
  )
}

export default AboutContent

