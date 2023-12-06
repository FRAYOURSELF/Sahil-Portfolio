import "./aboutme.css";
import {gsap, Power3, Power2} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, {useEffect, useRef, useState} from 'react'
import { FaReact } from 'react-icons/fa';
import {DiJavascript} from 'react-icons/di';
import {FaJava} from 'react-icons/fa';
import {SiCplusplus} from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import {SiMongodb} from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';
import {FaCss3Alt} from 'react-icons/fa';
import Theme from "../assets/Theme.jpg";
const aboutme = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
    const imgRef = useRef(null);
    useEffect(()=>{
      gsap.from(".first", {
        duration:2,
        delay:1,
        opacity:0,
        x:-20,
        ease:Power3.easeOut,
        scrollTrigger:{
          trigger:".first"
        }
      });
      gsap.from(".second", {
        duration:2.5,
        delay:1,
        opacity:0,
        x:-20,
        ease:Power3.easeOut,
        scrollTrigger:{
          trigger:".second"
        }
      });
    }, []);
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const scale = 1 + scrollY / 500;
  return (
    <div>
      <div className="mainaboutme">
        <div className="first">
            <h1>Hey, </h1>
        </div>
        <div className="second">
            <h1>I'm Sahil </h1>
        </div>
        <div>
            <h2>
                - A versatile developer, UI/UX desginer,
            </h2>
            <h2>
                product manager, competitve coder and tech  
            </h2>
            <h2>
            enthusiast nudging teams into greatness.
            </h2>
        </div>
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
    </div>
  )
}

export default aboutme
