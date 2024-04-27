import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import ScrollAnimation1 from "../components/scrollanimation";
import Logo from "../img/logo.jpg";
import AboutCard from "../components/aboutcards";
import Footer from "../components/footer";
import "../components/about.css";
import First from "../img/about/first.jpg";
import Second from "../img/about/second.jpg";
import Third from "../img/about/third.jpg";
import Fourth from "../img/about/fourth.jpg";
import Fifth from "../img/about/fifth.jpg";
import RotatingText from "../components/rotatintext";

import AboutFlex from "../components/aboutflex";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ScrollAnimation1>
        <Navbar />
      </ScrollAnimation1>

      <div className="parentaboutflex">
        <AboutFlex writing={"Who We Are"} image={First} spaceCount={4}/>
        
          
       
      </div>

      <Footer />
    </div>
  );
}

export default About;
