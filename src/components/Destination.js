import React, { useState, useEffect } from "react";

import "./styles/destination.css";
import Data from "./data";

export default function Destination() {
  const [data, setData] = useState([]);
  const [destIndex, setDestIndex] = useState(0);

  const getData = () => {
    return Data["destinations"];
  };

  useEffect(() => {
    setData(getData());
    console.log(data);
  }, [data]);

  return (
    <div className="destination-mainContainer">
    	<div className="destination-content">
    		<h3 className="destination-title">
        		<span className="destination-index">01</span> Pick your Destination
        	</h3>
            <div className="destination-content-main">
                <div className="destination-image-container">
                    <img src={data.length > 0 && data[destIndex].images.png} className="destination-image"></img>
                </div>
                <div className="destination-info-main">
                    <div className="destination-tabs-container">
                        <ul className="destination-tabs">
                            { data.length > 0 &&
                                data.map( (value, index) => (
                                    <li className={destIndex === index ? "destination-tab dest-tab-active" : "destination-tab"} onClick={() => setDestIndex(index)}>{value.name}</li>
                                )
                                )
                            }
                        </ul>
                    </div>
                    <div className="destination-info">
                        <h1 className="destination-location">{data.length > 0 && data[destIndex].name}</h1>
                        <p className="destination-info-para">{data.length > 0 && data[destIndex].description}</p>
                    </div>
                    <hr></hr>
                    <div className="destination-statistics">
                        <div className="destination-stat">
                            <h3>Avg. Distance</h3>
                            <h2 className="dest-stat">{data.length > 0 && data[destIndex].distance}</h2>
                        </div>
                        <div className="destination-stat">
                            <h3>Est. Travel Time</h3>
                            <h2 className="dest-stat">{data.length > 0 && data[destIndex].travel}</h2>
                        </div>
                    </div>    
                </div>
            </div>
         </div>
    </div>
  );
}
