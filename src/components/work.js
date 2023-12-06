import "./workCardStyles.css";
import React, {useEffect} from 'react'
import WorkCard from "./workCard";
import WorkCardData from "./workCardData";
import anime from "animejs/lib/anime.es.js";
const work = () => {
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
    <div className="work-container">
        <h1 class="ml15">
        <span class="word">Pro</span>
        <span class="word">Jects</span>
        </h1>
        <br/>

        <div className="project-container">
            {WorkCardData.map((val, ind) =>{
            return(
                <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
            })}
        </div>
    </div>
  )
}

export default work
