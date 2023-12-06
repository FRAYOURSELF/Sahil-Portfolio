import "./inspoStyles.css"
import React, {useEffect} from 'react';
import {gsap, Power3} from 'gsap';

const inspo = () => {
  useEffect(()=>{
    gsap.from(".backgro", {
      duration:2,
      delay:2,
      opacity:0,
      x:-20,
      ease:Power3.easeOut,
      scrollTrigger:{
        trigger:".dnt"
      }
    });
    gsap.from(".baack", {
      duration:2,
      delay:2,
      opacity:0,
      x:20,
      ease:Power3.easeOut,
      scrollTrigger:{
        trigger:".dnt"
      }
    });
  })

  return (
    <div className="inspo">
        <div className="backgro"><div className="left">
            <h2>I am on my way to showcase my skills of coding and development.</h2>
            <div className="dnt">
            <h1>Are you with me?</h1></div>
         </div>
        </div>
        <div className="baack"><div className="right">
        <h2>I’ll bring years of experience, big energy and fresh thinking.</h2>
        <h1>Let's move together..</h1>
        </div> 
        </div>
    </div>
  )
}

export default inspo