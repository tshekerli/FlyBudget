import First from "../img/about/first.jpg";
import Second from "../img/about/second.jpg";
import Third from "../img/about/third.jpg";
import Fourth from "../img/about/fourth.jpg";
import Fifth from "../img/about/fifth.jpg";
import Textbox from "../components/textbox";
import AboutFlex from "../components/aboutflex";
import ScrollAnimation1 from "../components/scrollanimation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";


import { TypeAnimation } from 'react-type-animation';
 
const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'I KNOW FRONT END',
        1000, 
        'I KNOW BACK END', 
        2000, 
        'I KNOW JAVASCRIPT', 
        1000,
        'I KNOW PYTHON', 
        1000,
        
      ]}
      speed={50}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};

const aboutme = (
  <ScrollAnimation1>
    <p>My name is Tural</p>
  </ScrollAnimation1>
);



const text = (
  <div className="aboutparagraph">
    <ScrollAnimation1>
      <p>I am a full stack developer from Azerbaijan</p>
    </ScrollAnimation1>
    <ScrollAnimation1>
      <p>My socials are:</p>
    </ScrollAnimation1>

    <div
      className="socialicons"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "3rem",
      }}
    >
      <ScrollAnimation1>
        <a href="https://www.linkedin.com/in/2rall/" target="_blank" rel="noreferrer">
          <LinkedInIcon className="socialicon" style={{  }} />
        </a>
      </ScrollAnimation1>
      <ScrollAnimation1>
        <a href="mailto:tshekerli@gmail.com">
          <MailIcon className="socialicon" style={{  }} />
        </a>
      </ScrollAnimation1>

      <ScrollAnimation1>
        <a href="https://github.com/tshekerli" target="_blank" rel="noreferrer">
          <GitHubIcon className="socialicon" style={{  }} />
        </a>
      </ScrollAnimation1>
    </div>
  </div>
);

function SecondParentAboutFlex() {
  return (
    <div className="secondflex" style={{backgroundImage:`url(${Second})`}}>
      <ExampleComponent/>
    </div>
  );
}



 function FirstParentAboutFlex() {
  return (
    <div className="parentaboutflex">
      <AboutFlex
        writing={"Who We Are"}
        image={First}
        spaceCount={4}
        fontsize="1.9em"
        color={"white"}
      />
      <Textbox firstp={aboutme} children={text} />
    </div>
  );
}

export  {FirstParentAboutFlex, SecondParentAboutFlex}