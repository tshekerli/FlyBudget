import React, { useState } from "react";
import EmptySearchImage from "../img/emptysearch.jpg.png";
import NotFoundImage from "../img/notfound.png";
import First from "../img/results/1.jpg";
import Second from "../img/results/2.jpg";
import Third from "../img/results/3.jpg";
import Fourth from "../img/results/4.jpg";
import Fifth from "../img/results/5.jpg";
import Sixth from "../img/results/6.jpg";
import Seventh from "../img/results/7.jpg";
import Eighth from "../img/results/8.jpg";
import Ninth from "../img/results/9.jpg";
import Tenth from "../img/results/10.jpg";
import Eleventh from "../img/results/11.jpg";
import Twelfth from "../img/results/12.jpg";
import Thirteenth from "../img/results/13.jpg";
import { Dimmer, Loader, Image, Segment, Modal } from "semantic-ui-react";
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import SlidingDiv from "./slidingimage"

import "./results.css";

const images = [
  First,
  Second,
  Third,
  Fourth,
  Fifth,
  Sixth,
  Seventh,
  Eighth,
  Ninth,
  Tenth,
  Eleventh,
  Twelfth,
  Thirteenth,
];
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: " center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
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
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  

  

   

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isLoading) {
    return <LoaderComponent />;
  }

  if (!data) {
    return (
      <SlidingDiv/>
    );
  }

  if (data) {
    if (data.length == 0) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: " center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <img
            src={NotFoundImage}
            alt="Please search"
            height={"500px"}
            style={{ borderRadius: "10%" }}
          />
        </div>
      );
    }

    return (
      <div
        className="result-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "baseline",
          alignContent: "space-between",
          marginLeft: "auto",
          marginRight: "auto",
          gap: "2rem",
          height:'100%',
          width:'100%'
        }}
      >
        {data.map((item, index) => (
          <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={index *600}>
          <div
            key={index}
            className="result-div"
            onClick={() => handleOpen(item)}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
              boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)",
              backgroundImage: `url(${getNextImage()})`,
              backgroundSize: "cover",
            }}
          >
            {item.routes.map((route, routeIndex) => {
              const departureDate = new Date(route.localDeparture);
              return (
                <div
                  key={routeIndex}
                  className="from-to-result"
                  style={{
                    backgroundColor: "rgba(240, 240, 240, 0.5)",
                    color: "black",
                    borderRadius: "10px",
                  }}
                >
                  <p>
                    {route.cityFrom} - {route.cityTo}
                  </p>
                  <p>{departureDate.toLocaleString()}</p>
                </div>
              );
            })}
            <div
              className="secondary-data"
              style={{
                backgroundColor: "rgba(240, 240, 240, 0.2)",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <p className="price-info">
                {formatNumber(item.price)} {item.currency}
              </p>
              <a
                href={item.link}
                className="search-link"
                target="_blank"
                style={{ color: "white" }}
              >
                Link
              </a>
            </div>
          </div>
          </Grow>
        ))}
        {selectedItem && (
  <Modal
    open={open}
    onClose={handleClose}
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      overflow: 'auto',
      maxHeight: '600px',
      maxWidth: '600px',
       
      margin:'0'
    }}
  >
    <Modal.Content style={{
      backgroundImage: `url(${getNextImage()})`,
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center',
      minHeight: '600px',
      minWidth: '600px',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      gap:"10px"
    }}>
      {selectedItem.routes.map((route, routeIndex) => {
        const departureDate = new Date(route.localDeparture);
        return (
          <div key={routeIndex}>
            <p id="modal-from" style={{backgroundColor:"rgba(0, 0, 0, 0.5)", color: "white", borderRadius:"500px",  }}>
              {route.cityFrom} - {route.cityTo}
            </p>
            <p id="modal-time" style={{backgroundColor:"rgba(0, 0, 0, 0.5)", color: "white", borderRadius:"500px",  }}>{departureDate.toLocaleString()}</p>
          </div>
        );
      })}
      <p id="modal-price"  style={{backgroundColor:"rgba(0, 0, 0, 0.5)", color: "white", borderRadius:"500px",  }} className="price-info secondary-data"> 
        {formatNumber(selectedItem.price)} {selectedItem.currency}
      </p>
      <a
        href={selectedItem.link}
        className="search-link secondary-data"
        id="modal-link" 
        target="_blank"
        
        style={{backgroundColor:"rgba(0, 0, 0, 0.5)", color: "white", borderRadius:"500px",  }}
      >
        Link
      </a>
    </Modal.Content>
  </Modal>
)}
      </div>
    );
  }
}