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
        <div className="aboutflex" style={{ backgroundImage: `url(${First})` }}>
          <div className="text">
            <span>Who We Are</span>
          </div>
        </div>
        <div className="textitems">
          <p className="firstp">Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
            aliquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
            aliquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
            aliquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
            aliquam.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
