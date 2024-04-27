import First from "../img/about/first.jpg";
import Second from "../img/about/second.jpg";
import Third from "../img/about/third.jpg";
import Fourth from "../img/about/fourth.jpg";
import Fifth from "../img/about/fifth.jpg";
import Textbox from "../components/textbox";
import AboutFlex from "../components/aboutflex";
import ScrollAnimation1 from "../components/scrollanimation";

const aboutme = <ScrollAnimation1><p>My name is Tural</p></ScrollAnimation1>
const text  = <div className="aboutparagraph">
  <ScrollAnimation1><p>I am a full stack developer from Azerbaijan</p></ScrollAnimation1>
  <ScrollAnimation1><p>My socials are:</p></ScrollAnimation1>
  <div style={{display:'flex', flexDirection:'row'}}>

  </div>
</div>



export  function FirstParentAboutFlex(){
    return(
        <div className="parentaboutflex">
        <AboutFlex writing={"Who We Are"} image={First} spaceCount={4} fontsize='1.9em' color={'white'}/>
        <Textbox firstp={aboutme} children={text} />
          
       
      </div>
    )
}