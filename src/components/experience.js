import "./experienceStyles.css";
import React, {useEffect} from 'react'
import imgGirl from "../images/birla.jpg";
import {gsap, Power3, Power2} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const experience = () => {
  useEffect(()=>{
    gsap.from(".exp-info", {
      duration:2,
      delay:1,
      opacity:0,
      x:-20,
      ease:Power3.easeOut,
      scrollTrigger:{
        trigger:".stripes"
      }
    });
    gsap.from(".expp", {
      duration:2,
      delay:1,
      opacity:0,
      x:-20,
      ease:Power3.easeOut,
      scrollTrigger:{
        trigger:".stripes"
      }
    });
    gsap.from(".exp-img", {
      duration:2,
      delay:1,
      opacity:0,
      x:-20,
      ease:Power3.easeOut,
      scrollTrigger:{
        trigger:".stripes"
      }
    });
  }, [])
  return (
    <div className="experience">
        <div className="stripes">
            <div className="s-one"></div>
            <div className="s-two"></div>
            <div className="s-three"></div>
        </div>
        <div className="exp-img">
        <img src={imgGirl} className=""/>
        </div>
        <div className="exp-title">
            <span><label>Birla Science</label></span>
            <p>Centre</p>
        </div>
        <div className="expp">
        <h1><br/>Web development Intern</h1>
      </div>
        <div className="exp-info">
          <ul style={{ listStyleType: 'disc' }}>
            <li>The design and development of the Birla Science Centre Website using React and Wix.</li>
            <li>We made a modern responsive museum website where the audience can explore the exhibitions and art galleries at a glance.
            </li>
            <li>From clear CTAs, bold headlines, visual hierarchy, quality images, and animations upon scrolling, providing an effective way to reach out to Birla Science
            Centre.</li>
          </ul>
        </div>
    </div>
  )
}

export default experience
