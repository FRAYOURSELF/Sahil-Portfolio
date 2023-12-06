import "./projectNStyles.css";
import React, {useEffect} from 'react';
import anime from "animejs/lib/anime.es.js";
import {Link} from "react-router-dom";

const projectN = ()=> {
    useEffect(()=>{
        anime.timeline({loop: true})
      .add({
        targets: '.ml15 .word',
        scale: [14,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i
      }).add({
        targets: '.ml15',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
      })
       return (
         <div className="socio">
            <h1 class="ml15">
            <span class="word">Pro</span>
            <span class="word">Jects</span>
            </h1>
            <br/>
            <div className="social11">
            <div class="squaree linkedinn">
        <span></span>
        <span></span>
        <span></span>
        <div class="contentt">
            <h2>
                PopCorn Recomendation Engine
            </h2>
            <p>This <b>Web Development </b>Project was one of my first and toughest projects to have worked on.</p>
            <p>For more details-</p>
            <Link to="/poPCorn" className="btn">@PopCorn</Link>
        </div>
    </div>

    <div class="squaree twitterr">
        <span></span>
        <span></span>
        <span></span>
        <div class="contentt">
            <h2>
            Food Delivery Application
            </h2>
            <p>In this <b>Android Development </b>Project I learnt React, Javascript and the usage of APIs.</p>
            <p>For more details-</p>
            <Link to="/delivery" className="btn">@DeliverySah</Link>
        </div>
    </div>

    <div class="squaree githubb">
        <span></span>
        <span></span>
        <span></span>
        <div class="contentt">
            <h2>
            Secure You
            </h2>
            <p>This <b>Blockchain Healthcare </b>Application was developed by me and my fellow teammate for an event HackaNoodle by Zomato.</p>
            <p>For more details-</p>
            <Link to="/secure" className="btn">@SecureYou</Link>
        </div>
    </div>
         </div>
         </div>
       );
    }
 export default projectN;