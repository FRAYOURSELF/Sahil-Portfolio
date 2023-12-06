import "./infoathomeStyles.css";
import React, {useEffect, useRef} from 'react';
import imgGirl from "../images/hello.jpg";
import Reaactt from "../images/react.png";
import { FaReact } from 'react-icons/fa';
import {DiJavascript} from 'react-icons/di';
import {FaJava} from 'react-icons/fa';
import {SiCplusplus} from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import {SiMongodb} from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';
import {FaCss3Alt} from 'react-icons/fa';
import {gsap, Power3, Power2} from 'gsap';
import $ from 'jquery';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const infoathome = () => {
  const imgRef = useRef(null);
  useEffect(()=>{
    const el=imgRef.current;
    gsap.fromTo(el, {rotation:0}, {rotation:360, duration:3, scrollTrigger:{
      trigger:el
    }})
    let textAnimation = gsap.timeline();
    gsap.from(".inf", {
      duration:2,
      delay:2,
      opacity:0,
      x:-20,
      ease:Power3.easeOut,
      scrollTrigger:{
        trigger:".inf"
      }
    });
    gsap.from(".picc", {
      duration:2,
      delay:1,
      opacity:0,
      x:-20,
      ease:Power3.easeOut,
      scrollTrigger:{
        trigger:".inf"
      }
    });
    gsap.to(".line-one", {
      duration:2,
      delay:0.4,
      height:'100vh',
      ease:Power2.easeInOut,
      scrollTrigger:{
        trigger:".inf"
      }
    });

    }, []);
    
  return (
    <div className="infoo">
      <div className="inf">
          <h1>Hi, My name is Sahil Agarwal</h1>
          <p>I AM A DEVELOPER, UX/UI DESIGNER AND A COMPETITIVE CODER. </p>
          <ul>
            <li>CodeForces:<br/>
              <div className="dsa">1609(Expert)</div>
            </li>
            <li>Facebook Hacker Cup 2022<br/><div className="dsa">Global Rank: 2814(out of 27,604 participants)</div>
          </li>
            <li>Google Kick Start Round F 2022 <br/><div className="dsa">Global Rank: 1742(out of 10,500 participants)</div>
            </li>
          </ul>
          <div className="tech-stck">
          <h1>Tech Stack      | </h1>
          <div className="ico">
          <SiCplusplus size={50} style={{color:"blue", marginRight: "1rem"}} ref={imgRef}/>
          <FaReact size={50} style={{color:"blue", marginRight: "1rem"}} ref={imgRef}/>
          <DiJavascript size={50} style={{color:"yellow", marginRight: "1rem"}} />
          <FaJava size={50} style={{color:"red", marginRight: "1rem"}} />
          <FaPython size={50} style={{color:"blue", marginRight: "1rem"}} />
          <SiMongodb size={50} style={{color:"green", marginRight: "1rem"}} />
          <FaHtml5 size={50} style={{color:"red", marginRight: "1rem"}} />
          <FaCss3Alt size={50} style={{color:"blue", marginRight: "1rem"}} />
          </div>
          </div>
      </div>
        <div className="stripes">
          <div className="line-one">
          </div>
          <div className="line-two"></div>
        </div>
        
        <div className="picc"><img src={imgGirl} className=""/></div>
    </div>
  )
}

export default infoathome
