import React from "react";
import EmptySearchImage from "../img/emptysearch.jpg.png";
import NotFoundImage from "../img/notfound.png";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import "./results.css"

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
    console.log(data)
    return (
      <div className="result-container" style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:" baseline", alignContent:"space-between", marginLeft:"auto", marginRight:"auto", gap:"2rem"}}>
        {data.map((item, index) => (
          <div key={index} className="result-div" style={{display:"flex", flexDirection:"column", width:"200px"}}>
            {item.routes.map((route, routeIndex) => {
              const departureDate = new Date(route.localDeparture);
              return (
                <div key={routeIndex} className="from-to-result">
                  <p>
                    {route.cityFrom} - {route.cityTo}
                  </p>
                  <p>{departureDate.toLocaleString()}</p>
                </div>
              );
            })}
            <div className="secondary-data">
            <p>{formatNumber(item.price)} {item.currency}</p>
            
            
            <a href={item.link} className="search-link" target="_blank">Link</a>
            </div>
            
          </div>
        ))}
      </div>
    );
  }
}
