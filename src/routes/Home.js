import React from 'react'
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import Bubble from "../components/bubbleForHome";
import Inspo from "../components/inspo";
import Social from "../components/social";
import Techstack from '../components/techstack';
import Infoathome from '../components/infoathome';
import Aboutme from "../components/aboutme";
import ThePic from "../components/thepic";
import Expp from "../components/Expp";
import Tech from "../components/Tech"
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Bubble/>
      {/* <Inspo/> */}
      <Aboutme/>
      <ThePic/>
      {/* <Infoathome/> */}
      <Expp/>
      <Social/>
      <Tech/>
      <Footer/>
    </div>
  )
}

export default Home
