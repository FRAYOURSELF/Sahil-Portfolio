import React, {useEffect} from 'react'
import {gsap, Power3, Power2} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./hobbies.css";
import art from "../images/artt.jpg";
import basket from "../images/basketball.jpg";
import novel from "../images/novell.JPG";
import guitar from "../images/guitar.jpg";
import me from "../images/me.JPG";
const hobbies = () => {
  useEffect(()=>{
    gsap.from(".fobo", {
      duration:2,
      delay:1,
      opacity:0,
      x:-20,
      ease:Power3.easeOut,
      scrollTrigger:{
        trigger:".bas"
      }
    });
    gsap.from(".fobo2", {
      duration:2,
      delay:2.5,
      opacity:0,
      x:-20,
      ease:Power3.easeOut,
      scrollTrigger:{
        trigger:".fobo"
      }
    });
  }, [])
  return (
    <div className="bas">
      <div className="fobo">
      <div className="hob">
        <h1>Hobbies</h1>
      </div>
      <div className="bas-img1">
        <img src={basket} className=""/>
        </div>
        <div className="bask">
        <h1>Basketball</h1>
        <p>I am an avid basketball enthusiast, dedicated to honing my skills on the court and continuously seeking opportunities for personal and team growth in the realm of competitive sports.</p>
      </div>
      <div className="bas-img2">
        <img src={art} className=""/>
        </div>
        <div className="bask2">
        <h1>Art</h1>
        <p>I am a passionate artist dedicated to the exploration and expression of creativity. My hobby is a journey of self-discovery and a continual pursuit of translating emotions and ideas into visually compelling works.</p>
      </div>
      </div>
      <div className="me">
      <img src={me} className=""/>
      </div>
      <div className="fobo2">
        <div className="bas-img3">
        <img src={guitar} className=""/>
        </div>
        <div className="bask3">
        <h1>Playing Guitar</h1>
        <p>I am a dedicated guitarist, channeling my passion for music through the strings. With each strum and chord progression, I embark on a melodic journey, expressing emotions and telling stories through the rhythmic language of the guitar.</p>
      </div>
      <div className="bas-img4">
        <img src={novel} className=""/>
        </div>
        <div className="bask4">
        <h1>Reading Novel</h1>
        <p>I am a devoted reader, drawn to the enchanting worlds of romantic and mystery crime novels. In the pages of a book, I find solace, excitement, and the thrill of unraveling intricate plots, all while indulging in the nuanced emotions of love and suspense that these genres so beautifully offer."</p>
      </div>
      </div>
    </div>
  )
}

export default hobbies
