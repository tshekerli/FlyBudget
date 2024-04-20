import React from "react";
import EmptySearchImage from "../img/emptysearch.jpg.png";
import NotFoundImage from "../img/notfound.png";
import First from "../img/results/1.jpg"
import Second from "../img/results/2.jpg"
import Third from "../img/results/3.jpg"
import Fourth from "../img/results/4.jpg"
import Fifth from "../img/results/5.jpg"
import Sixth from "../img/results/6.jpg"
import Seventh from "../img/results/7.jpg"
import Eighth from "../img/results/8.jpg"
import Ninth from "../img/results/9.jpg"
import Tenth from "../img/results/10.jpg"
import Eleventh from "../img/results/11.jpg"
import Twelfth from "../img/results/12.jpg"
import Thirteenth from "../img/results/13.jpg"
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import "./results.css"

const images = [First, Second, Third, Fourth, Fifth, Sixth, Seventh, Eighth, Ninth, Tenth, Eleventh, Twelfth, Thirteenth];
let lastThreeImages = [];

function getNextImage() {
  let nextImage;
  do {
    nextImage = images[Math.floor(Math.random() * images.length)];
  } while (lastThreeImages.includes(nextImage));

  lastThreeImages.push(nextImage);
  if (lastThreeImages.length > 7) {
    lastThreeImages.shift();
  }

  return nextImage;
}


function LoaderComponent() {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:" center", marginLeft:"auto", marginRight:"auto"}}>
      <Segment>
        <Dimmer active inverted>
          <Loader size="massive">Loading</Loader>
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    </div>
  );
}
function formatNumber(num) {
    const decimalPart = num - Math.floor(num);
    if (decimalPart === 0) {
      return num.toFixed(0);
    } else if (decimalPart * 10 - Math.floor(decimalPart * 10) === 0) {
      return num.toFixed(1);
    } else {
      return num.toFixed(2);
    }
  }


export function ResultContainer({ data, isLoading }) {
  if (isLoading) {
    return <LoaderComponent />;
  }
  

  
  if (!data) {
    return (
      <div style={{display:"flex", justifyContent:"center", alignItems:" center", marginLeft:"auto", marginRight:"auto"}}>
        <img src={EmptySearchImage} alt="Please search" height={"500px"} style={{borderRadius:"10%"}} />
      </div>
    );
  }
  if (data) {
    if (data.length == 0){
      return (
        <div style={{display:"flex", justifyContent:"center", alignItems:" center", marginLeft:"auto", marginRight:"auto"}}>
          <img src={NotFoundImage} alt="Please search" height={"500px"} style={{borderRadius:"10%"}} />
        </div>
      );
    }
    
    return (
      <div className="result-container" style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"baseline", alignContent:"space-between", marginLeft:"auto", marginRight:"auto", gap:"2rem"}}>
        {data.map((item, index) => (
  <div key={index} className="result-div" style={{display:"flex", flexDirection:"column", width:"250px", boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)", backgroundImage: `url(${getNextImage()})`, backgroundSize: 'cover'}}>
    {item.routes.map((route, routeIndex) => {
      const departureDate = new Date(route.localDeparture);
      return (
        <div key={routeIndex} className="from-to-result" style={{backgroundColor: "rgba(240, 240, 240, 0.5)", color: 'black', borderRadius:"10px"}}>
          <p>
            {route.cityFrom} - {route.cityTo}
          </p>
          <p>{departureDate.toLocaleString()}</p>
        </div>
      );
    })}
    <div className="secondary-data" style={{backgroundColor: "rgba(240, 240, 240, 0.2)", color: 'white', borderRadius:"10px"}}>
      <p className="price-info">{formatNumber(item.price)} {item.currency}</p>
      <a href={item.link} className="search-link" target="_blank" style={{color: "white"}}>Link</a>
    </div>
  </div>
))}
      </div>
    );
  }
}
