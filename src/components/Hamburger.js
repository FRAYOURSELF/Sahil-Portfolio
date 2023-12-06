import React  from 'react';
import {gsap} from 'gsap';
import "./Hamburger.css";
import {Power3} from 'gsap';
import $ from 'jquery';
import { useEffect } from 'react';
function hambur(){
    useEffect(()=>{
        gsap.set(".project-preview", { width: 0 });
    
            var tl = new gsap.timeline();
    
            $(document)
              .on("mouseover", ".navigation-item", function(evt) {
                tl = new gsap.timeline();
                tl.to($(".project-preview"), 1, {
                  width: "600px",
                  ease: Power3.easeInOut
                });
              })
              .on("mouseout", ".navigation-item", function(evt) {
                tl = new gsap.timeline();
                tl.to($(".project-preview"), 0.5, {
                  width: 0,
                  ease: Power3.easeInOut
                });
              });
    })
        return (
            <div className='hambur'>
                <div class="navigation-wrapper">
      <div class="project-preview-wrapper">
        <div class="project-preview"></div>
      </div>
      <ul class="navigation-list">
        <li class="navigation-item">
          <a class="navigation-link navigation-link-1" href="#">
            <span data-text="Mouthwash">Mouthwash</span>
          </a>
        </li>
        <div class="project-overlay"></div>
        <li class="navigation-item">
          <a class="navigation-link navigation-link-2" href="#">
            <span data-text="Offbeat">Offbeat</span>
          </a>
        </li>
        <li class="navigation-item">
          <a class="navigation-link navigation-link-3" href="#">
            <span data-text="Expansions">Expansions</span>
          </a>
        </li>
        <li class="navigation-item">
          <a class="navigation-link navigation-link-4" href="#">
            <span data-text="Canals">Canals</span>
          </a>
        </li>
        <li class="navigation-item">
          <a class="navigation-link navigation-link-5" href="#">
            <span data-text="Asterisks">Asterisks</span>
          </a>
        </li>
        <li class="navigation-item">
          <a class="navigation-link navigation-link-6" href="#">
            <span data-text="Charger">Charger</span>
          </a>
        </li>
        <li class="navigation-item">
          <a class="navigation-link navigation-link-7" href="#">
            <span data-text="Unclocked">Unclocked</span>
          </a>
        </li>
        <li class="navigation-item">
          <a class="navigation-link navigation-link-8" href="#">
            <span data-text="Craft">Craft</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="progressbar"></div>
            </div>
        );
}
export default hambur
