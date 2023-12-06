import "./Delivery.scss";
import React from 'react'
import imgfood from "../images/bhookh.png";
import {Link} from "react-router-dom";
import arrow from '../images/arrow-right.svg'
const Delivery = () => {
  return (
    <div className="delivery">
      <div class="containeer">
        <div class="boxx">
            <div class="product__img">
                <img src={imgfood} alt=""/>
            </div>

            <div class="product__video">
                <div class="video">
                    <i class="fas fa-play"></i>
                    <p>watch a review</p>
                </div>
            </div>

            <div class="product__disc">
                <div class="product__disc--content">
                    <div class="disc__content--about">
                        <h1>DeliverySah</h1>
                        <span>We will make sure your restaurant tip go wild...</span>
                        <p><ul style={{ listStyleType: 'disc' }}>
                            <li>
                            Developed a food delivery application where users can explore the nearby eateries that have been registered on the application to order food.
                            </li>
                            <li>
                            Users can search restaurants according to the food items with add to cart option provided. 4 screens were added — food list page, food dish details Page,
order summary page and order tracking page.
                            </li>
                            <li>
                            Once a user place order and a driver has accepted their request, the driver’s location is displayed in real time on the map.
                            </li>
                            </ul></p>
                    </div>

                    <div class="product__view--more">
                        <p>view all specifications</p>
                        <div class="view__more--block"></div>
                    </div>
                </div>
            </div>
            <div className="btn-row">
                <button className="explore-button">Go Back
                  <div className="arrow-icon">
                  <Link to="/project"><img src={arrow} alt="row"/></Link>
                  </div>
                </button>
            </div>
            {/* <div class="product_buttons">
                <button class="btn wishlist">wishlist</button>
                <button class="btn buy">buy</button>
            </div> */}
        </div>
    </div>
<a href="https://youtu.be/NBIbZIegMRY" target="_blank"><footer>
    <div class="texto">
        <span>
            <i class="fab fa-youtube"></i>
             watch on youtube</span>
    </div>
</footer>
   </a>
    </div>
  )
}

export default Delivery
