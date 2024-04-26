import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import ScrollAnimation1 from "../components/scrollanimation";
import Logo from "../img/logo.jpg";
import AboutCard from "../components/aboutcards";
import Footer from "../components/footer";
import "../components/about.css";
const aboutme =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, laudantium?";

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
        <div className="aboutflex"></div>
        <div className="textitems">
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, aliquam.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, aliquam.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, aliquam.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, aliquam.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
