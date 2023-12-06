import "./thepic.css";
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
import Theme from "../assets/themee.jpg";
const aboutme = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
    const imgRef = useRef(null);
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const scale = 1 + scrollY / 500;
  return (
      <div className="mainaboutme">
      <div className="zoomed-image-container" style={{ transform: `scale(${scale})` }}>
      <img
        className="zoomed-image"
        src={Theme}// Replace with the actual image source
        alt="Zoomed Image"
      />
    </div>
    </div>
  )
}

export default aboutme
