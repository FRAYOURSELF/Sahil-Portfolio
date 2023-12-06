import React, {useEffect, useRef} from "react";
import "./secureStyles.scss";
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import {gsap} from 'gsap';
import {Link} from "react-router-dom";

import imgGirl from "../images/doc1.png";
import imgBoy from "../images/doc2.png";
import arrow from '../images/arrow-right.svg';

function App() {
  let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)
  let tl = new gsap.timeline({ delay: .8});
  
  useEffect(() => {
    // Images Vars
    const girlImage = images.firstElementChild; // or children[0]
    const boyImage = images.lastElementChild;
    
    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //Remove initial flash
    gsap.to(app.current, {css: {visibility: 'visible'}})

    //Images Animation
    tl.from(girlImage, 1.2, {y: 1280, ease: Power3.easeOut},'Start')
    .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(boyImage, 1.4, {y: 1280, ease: Power3.easeOut}, .2)
    .from(boyImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

    //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children ], 1, {
      y: 44,
      ease:Power3.easeOut,
      delay: .8
    }, .15, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)

  }, [tl])



  return (
    <div className="hero" ref={el => app = el}>
      <div className="containerr">
        <div className="hero-innerr">
          <div className="hero-contentt">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Use our Healthcare</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">for better, fast and</div>  
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">safe Treatment.</div>
                </div>
              </h1>
              <p>
              <ul style={{ listStyleType: 'disc' }}>
                            <li>
                            Designed an online Portal that maintains a digital copy of a patient's medical history securely using Blockchain (To prevent any sort of alterations).
                            </li>
                            <li>
                            Four types of Users - Hospitals/Doctors, Chemists, Insurance Companies, and Patients, everyone having their features.

                            </li>
                            <li>
                            The technology stack used includes Smart Contracts coded in Solidity, Ganache, Metamask, Frontend: ReactJS, HTML/CSS, Middleware: Web3.
                           </li>
                            </ul>
              </p>
              <div className="btn-row">
                <button className="explore-button">Go Back
                  <div className="arrow-icon">
                  <Link to="/project"><img src={arrow} alt="row"/></Link>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div ref={el => images = el}  className="hero-images-inner">
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
