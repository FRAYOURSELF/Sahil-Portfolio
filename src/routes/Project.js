import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg3 from "../components/HeroImg3";
import PricingCard from "../components/PricingCard";
import Work from "../components/work";
import BottleBub from "../components/bottlebub";
import Hamburger from "../components/Hamburger";
import Turningpages from './../components/heroagain';
import ProjectN from "../components/projectN";
import Disclaimer from '../components/disclaimer';
import Experience from '../components/experience';
import Experience2 from '../components/Experience2';
const Project = () => {
  return (
    <div>
      <Navbar/>
      {/* <HeroImg3 heading="Keep growing." text="They say if you love what you do, you will never work a day in your life. The collection of Projects below are just more than samples of work, they're a result of some fun."/> */}
      <Turningpages/>
      <ProjectN/>
      <Experience/>
      <Experience2/>
      {/* <Hamburger/> */}
      {/* <Disclaimer/> */}
      
      {/* <BottleBub/> */}
      {/* <PricingCard/> */}
      <Footer/>
      
    </div>
  )
}

export default Project
