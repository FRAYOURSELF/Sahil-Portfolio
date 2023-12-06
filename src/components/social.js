import "./socialStyles.css";
import React from 'react';

class social extends React.Component {
    render(){
       return (
         <div className="social1">
            <div class="square linkedin">
        <span></span>
        <span></span>
        <span></span>
        <div class="content">
            <h2>
                LinkedIn
            </h2>
            <p>This is where I network and build my professional portfolio</p>
            <a href="https://www.linkedin.com/in/sahil-agarwal-104baa216/" target="_blank">_SahilAgarwal</a>
        </div>
    </div>

    <div class="square twitter">
        <span></span>
        <span></span>
        <span></span>
        <div class="content">
            <h2>
                Twitter
            </h2>
            <p>This is where I read news and network with different social groups</p>
            <a href="https://twitter.com/sahilag20426397" target="_blank">@SahilAgarwal</a>
        </div>
    </div>

    <div class="square github">
        <span></span>
        <span></span>
        <span></span>
        <div class="content">
            <h2>
                Github
            </h2>
            <p>This is where I share code and work on projects</p>
            <a href="https://github.com/FRAYOURSELF" target="_blank">SahilAgarwal</a>
        </div>
    </div>
         </div>
       );
    }
 }
 export default social;