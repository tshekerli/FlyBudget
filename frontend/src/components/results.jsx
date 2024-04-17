import React from "react";
import EmptySearchImage from "../img/emptysearch.jpg";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import "./results.css"

function LoaderComponent() {
  return (
    <div>
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
      <div>
        <img src={EmptySearchImage} alt="Please search" height={"500px"} />
      </div>
    );
  }
  if (data) {
    console.log(data)
    return (
      <div className="result-container" >
        {data.map((item, index) => (
          <div key={index} className="result-div">
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
            
            
            <a href={item.link} className="search-link">Link</a>
            </div>
            
          </div>
        ))}
      </div>
    );
  }
}
