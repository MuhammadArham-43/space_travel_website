import React from "react";

import "./styles/home.css";

export default function Home( props ) {
  return (
    <div className="homeContainer">
      <div className="infoContent">
        <div className="info">
        <h1 className="title">
          So, you want to travel to <br></br>
          <span>SPACE</span>
        </h1>
          <p>
            Let's face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it. Well sit
            back, and relax because we'll give you a truly out of this world
            experience!
          </p>
        </div>
      </div>
      <div className="btnContainer">
        <p className="exploreBtn"  onClick={() => props.updateParentState('destination')}>EXPLORE</p>
      </div>
    </div>
  );
}
