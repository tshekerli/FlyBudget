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



const aboutflybudget = <ScrollAnimation1><p>Why I Created Fly Budget</p></ScrollAnimation1>
const aboutflybudget2 = (
  <div style={{ textWrap:'wrap', }}>
    <ScrollAnimation1><p>Recognizing a need in Azerbaijan for a more accessible and affordable way to search for flight tickets, I developed Fly Budget. Many people were seeking a simple, cost-effective solution to find flights, but options were limited. Fly Budget was created to fill this gap and provide a better service for those in need."</p></ScrollAnimation1>
    
  </div>

)

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

const myskills = <ScrollAnimation1><p>My skills</p></ScrollAnimation1>
const myskills2 = <ScrollAnimation1><p>As a proficient Python and JavaScript developer, I'm skilled in Django, Express.js, Redux.js, and React.js. I manage databases with PostgreSQL, perform numerical operations with NumPy, and use Git for version control. I'm experienced in HTML5, CSS, DOM, JWT security, and Material-UI design. My understanding of REST APIs and OOP principles makes me a comprehensive full-stack developer.</p></ScrollAnimation1>
const aboutthissite = <ScrollAnimation1><p>About this site</p></ScrollAnimation1>
const aboutthissite2 = <ScrollAnimation1><p>This website is built with React and enhanced with libraries like Redux.js for state management, Material-UI and Emotion for styling, and FontAwesome for icons. Animations are handled by Framer Motion and GSAP. Testing is facilitated by Jest DOM and React Testing Library. Other notable libraries include Day.js for date handling, dotenv for environment variable management, and Semantic UI for additional UI components. Routing is managed by React Router, and various other libraries are used to enrich the user experience.</p></ScrollAnimation1>


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
      
      <div className="childaboutflex">
        
      <Textbox firstp={aboutflybudget} children={aboutflybudget2}/>

      <AboutFlex
        writing={"About Fly Budget"}
        image={Fourth}
        spaceCount={3}
        fontsize={'1.5em'}
        color={'white'}
        />
      </div>

      <div className="childaboutflex">
      
      <ScrollAnimation1><SecondParentAboutFlex/></ScrollAnimation1>
      <Textbox firstp={aboutme} children={text} />
      </div>

      <div className="childaboutflex">
        
        <Textbox
        firstp={myskills}
        children={myskills2}
        />

      
      <AboutFlex
        writing={"About My Skills"}
        image={First}
        spaceCount={4}
        fontsize="1.5em"
        color={"white"}
      />

      
      </div>
      <div className="childaboutflex">
        

      <AboutFlex
        writing={"About This Site"}
        image={Fifth}
        spaceCount={4}
        fontsize="1.5em"
        color={"white"}
      />

        <Textbox
        firstp={aboutthissite}
        children={aboutthissite2}
        />

      
      

      
      </div>

    </div>
  );
}

export  {FirstParentAboutFlex, SecondParentAboutFlex}