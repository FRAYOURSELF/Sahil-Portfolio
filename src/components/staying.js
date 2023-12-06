import "./stayingStyles.scss";
import React, {useEffect} from 'react'
import $ from 'jquery';
const staying = () => {
    useEffect(()=>{
        $(".option").on("click", function() {
            $(".person-type").removeClass("active");
            $(".option").removeClass("active");
            $(this).addClass("active");
            var type = $(this).data("option");
            console.log($(type));
          
            setTimeout(function() {
              if (type === "home") {
                $(".home-body").addClass("active");
              } else if (type === "outdoor") {
                $(".outdoor-person").addClass("active");
              }
            }, 500);
          });
          
    })
  return (
    <div className="staying">
        <div class="main-contentt">
  <h1>Are you staying in or going out?</h1>
  <div class="illustrationn">
    <div class="boy"> <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/boy.svg" width="90px"/></div>
    <div class="person-type-wrapper">
      <div class="person-type active home-body">
        <div class="scenery"><img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/indoor.svg" height="250"/></div>
        <div class="background-items"><img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/furniture.svg" width="270"/></div>
        <div class="foreground-items"><img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/playstation.svg" width="65"/></div>
      </div>
      <div class="person-type outdoor-person">
        <div class="scenery"><img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/outdoor.svg" height="250"/></div>
        <div class="background-items"><img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/sky.svg" width="220"/></div>
        <div class="foreground-items"><img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dogtree.svg" width="200"/></div>
      </div>
    </div>
  </div>
  <div class="option-wrapper">
    <div class="option active" data-option="home">I'm attached to my home.</div>
    <div class="option" data-option="outdoor">Hell yeah, I love the outdoors!</div>
  </div>
</div>
    </div>
  )
}

export default staying
