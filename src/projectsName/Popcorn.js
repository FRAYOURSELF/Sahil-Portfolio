import React, {useEffect, useRef} from "react";
import "./Popcorn.scss";
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import {gsap} from 'gsap';
import {Link} from "react-router-dom";

import imgGirl from "../images/pop1.png";
import imgBoy from "../images/pop2.png";
import arrow from '../images/arrow-right.svg'

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
                  <div className="hero-content-line-inner">Relieving the burden</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">of confusion for a movie</div>  
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">using our recommendation.</div>
                </div>
              </h1>
              <p>
                <ul >
                  <li>--Popcorn is a hybrid mode Recommendation Engine, with multiple features to recommend the best movie falling under the user's interest movie by a
particular movie, by year, by various genres, and by other users' ratings.
</li>
                  <li>--Datasets are taken from TMDb(5000 movies) and IMDb(50000 movies). This recommendation engine is based on Streamlit (python framework). Jupyter
notebook has been used for setup and the Vectorization method based on cosine similarity for filtering.
</li>
                  <li>--Website link: https://popcorn-movie-recommender.herokuapp.com (Currently Deprecated)</li>

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
