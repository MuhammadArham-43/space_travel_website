import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Data from "./data";

import "./styles/technology.css";

export default function Technology() {
  const [techIndex, setTechIndex] = useState(0);
  const [data, setData] = useState([]);
  const [techImg, setTechImg] = useState(null);

  const isDesktop = useMediaQuery({query:'(min-width:1024px)'});

  const getData = () => {
    return Data["technology"];
  };

  const updateTechIndex = () => {
    console.log("Clicked");
  }

  useEffect(() => {
    setData(getData());
    console.log(data);
  }, []);

  return (
    <div className="tech-mainContainer">
      <div className="tech-content">
        <h3 className="tech-title">
          <span className="tech-index">03</span> Space Launch 101
        </h3>
        <div className="tech-content-main">
          <div className="tech-images">
            <img src={data.length > 0 && (isDesktop ? data[techIndex].images.portrait : data[techIndex].images.landscape) }></img>
            <div className="tech-toggle-btns-container">
              {data.length > 0 && data.map( (value, index) => (
                  <button className={index === techIndex ? "tech-toggle-btn tech-toggle-active" : "tech-toggle-btn"} onClick={ () => setTechIndex(index)} >{index + 1}</button>
              ))}
            </div>
          </div>
          <div className="tech-content-info">
            <div>
              <h3>The Terminology...</h3>
              <h1>{data.length > 0 && data[techIndex].name}</h1>
            </div>
            <p>{data.length > 0 && data[techIndex].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
