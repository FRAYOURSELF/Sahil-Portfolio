import "./HeroImg3Styles.css";
import React, {Component} from 'react'

class HeroImg3 extends Component {
    render(){
        return (
            <div className="hero-img1">
              <div className="heading1">
                 <h1>{this.props.heading}</h1>
                 <p>{this.props.text}</p>
              </div>
            </div>
          );
    }
}

export default HeroImg3
