import React, {useEffect} from 'react'
import "./Experience2.css";
import {gsap, Power3, Power2} from 'gsap';
import imgGirll from "../images/sim.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Experience2 = () => {
    useEffect(()=>{
        gsap.from(".exp-infoo", {
          duration:2,
          delay:1,
          opacity:0,
          x:-20,
          ease:Power3.easeOut,
          scrollTrigger:{
            trigger:".stripes"
          }
        });
        gsap.from(".exppp", {
          duration:2,
          delay:1,
          opacity:0,
          x:-20,
          ease:Power3.easeOut,
          scrollTrigger:{
            trigger:".stripess"
          }
        });
        gsap.from(".exp-imgg", {
          duration:2,
          delay:1,
          opacity:0,
          x:-20,
          ease:Power3.easeOut,
          scrollTrigger:{
            trigger:".stripess"
          }
        });
      }, [])
  return (
    <div className="experiencee">
      <div className="stripess">
            <div className="s-onee"></div>
            <div className="s-twoo"></div>
            <div className="s-threee"></div>
        </div>
        <div className="exp-imgg">
        <img src={imgGirll} className=""/>
        </div>
        <div className="exp-titlee">
            <span><label></label></span>
            <p>Simyog</p>
        </div>
        <div className="exppp">
        <h1>Software development Intern</h1>
      </div>
        <div className="exp-infoo">
          <ul style={{ listStyleType: 'disc' }}>
            <li>Developed a feature-rich PDF viewer: Leveraged the PDF.js library to create a customizable PDF viewer integrated with Qt, C++, HTML, CSS, and
JavaScript, allowing seamless viewing and manipulation of PDF documents.</li>
            <li>Enhanced functionality of CompScope: Resolved critical crashes and bugs, significantly improving the stability and reliability of the CompScope, an
innovative product by Simyog.
            </li>
            <li>Testing and analysis optimization: Introduced Qtest for analysis options, enabling efficient and reliable testing of CompScope's functionality. Played a key role
in identifying stakeholders and implementing improvements based on analysis results, leading to an enhanced user experience.
</li>
          </ul>
        </div>
    </div>
  )
}

export default Experience2
