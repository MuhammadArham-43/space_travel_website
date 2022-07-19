import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Destination from './components/Destination';
import Crew from "./components/Crew"
import Technology from './components/Technology';

function App() {

  const [currState, setCurrState] = useState("home");

  const updatePageState = (state) => {
    console.log(state);
    setCurrState(state);
  }

  const renderComponent = () => {
    switch (currState) {
      case "home":
        return <Home updateParentState={updatePageState} />
      case "destination":
        return <Destination />
      case "crew":
        return <Crew />
      case "technology":
        return <Technology />
      default:
        return <Home /> 
    }
  }

  return (
    <div className='mainContainer'>
    <div>
      <Navbar currentState={currState} updateParentState={updatePageState} />
    </div>
    <div className='compContainer'>
      {renderComponent()}
    </div>
    </div>
  );
}

export default App;
