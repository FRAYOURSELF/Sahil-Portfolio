import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotInvented from './../components/notInvented';
import Disclaimer from '../components/disclaimer';
import Hippo from '../components/hippo';
import Spots from "../components/spotschase";
import Amusement from '../components/amusement';
import Sahilagarwal from '../components/sahilagarwal';
import Staying from '../components/staying';
import Timeday from './timeday';
const About = () => {
  return (
    <div>
      <Navbar/>
      <NotInvented/>
      <Hippo/>
      {/* <Disclaimer/> */}
      <Amusement/>
      <Timeday/>
      <Sahilagarwal/>
      <Staying/>
      <Spots/>
      <Footer/>
    </div>
  )
}

export default About