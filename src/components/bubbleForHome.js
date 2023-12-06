import "./bubbleForHomeStyles.css";
import React, {useEffect} from 'react'
import IntroImg from "../assets/intro.jpg";
import {Link} from "react-router-dom";
import {gsap, Power3} from 'gsap';
const bubbleForHome = () => {
  return (
    <div className="bubbleHome">
        <div className="content">
            <p>"The more you use</p>
            <h1>Creativity, the more you have."</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
        <div id="bubble2" class="gradientBubble"></div>
        <div id="bubble" class="gradientBubble"></div>
        <div id="bubble3" class="gradientBubble"></div>
        <div id="bubble4" class="gradientBubble"></div>
        <div id="bubble5" class="gradientBubble"></div>
        <div id="moon"></div>
    </div>
  )
}

export default bubbleForHome
