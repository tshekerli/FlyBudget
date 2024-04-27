import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import ScrollAnimation1 from "../components/scrollanimation";

import Footer from "../components/footer";
import "../components/about.css";
import {FirstParentAboutFlex} from '../components/parentaboutflex'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ScrollAnimation1>
        <Navbar />
      </ScrollAnimation1>

      <FirstParentAboutFlex/>
      

      <Footer />
    </div>
  );
}

export default About;
