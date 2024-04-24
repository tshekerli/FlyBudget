import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import ScrollAnimation from "../components/scrollanimation2";
import ScrollAnimation1 from "../components/scrollanimation";
import Logo from "../img/logo.jpg";
import AboutCard from "../components/aboutcards"

const aboutme = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, laudantium?"

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", }}>
      <ScrollAnimation1>
        <Navbar />
      </ScrollAnimation1>

      <AboutCard 
      img={Logo}
      text={aboutme}
      
      />
      <AboutCard 
      img={Logo}
      text={aboutme}
      
      />
      <AboutCard 
      img={Logo}
      text={aboutme}
      
      />
      <AboutCard 
      img={Logo}
      text={aboutme}
      
      />
      <AboutCard 
      img={Logo}
      text={aboutme}
      
      />
      <AboutCard 
      img={Logo}
      text={aboutme}
      
      />
      <AboutCard 
      img={Logo}
      text={aboutme}
      
      />
      <AboutCard 
      img={Logo}
      text={aboutme}
      
      />
      
    </div>
  );
}

export default About;
