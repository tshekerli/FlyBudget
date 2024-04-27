import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import ScrollAnimation1 from "../components/scrollanimation";

import Footer from "../components/footer";
import "../components/about.css";
import {FirstParentAboutFlex } from '../components/parentaboutflex'
import { SecondParentAboutFlex} from '../components/parentaboutflex'
import Logo from "../img/logo.jpg"

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aboutuspage" style={{ display: "flex", flexDirection: "column", }}>
      <ScrollAnimation1>
        <Navbar />
      </ScrollAnimation1>
      <div className="aboutustext" style={{backgroundImage:`url(${Logo})`, }}>

      
      <ScrollAnimation1><h1 className="firsth1">FLY BUDGET</h1></ScrollAnimation1>
      <ScrollAnimation1><h1 className="secondh1">ABOUT US</h1></ScrollAnimation1>
      </div>
      <FirstParentAboutFlex/>
      <ScrollAnimation1><SecondParentAboutFlex/></ScrollAnimation1>
      

      <Footer />
    </div>
  );
}

export default About;
