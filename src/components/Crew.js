import React, { useEffect, useState } from 'react'

import Data from "./data"
import "./styles/crew.css"


export default function Crew() {

  const [crewIndex, setCrewIndex] = useState(0);
  const [data, setData] = useState([]);

  const getData = () => {
    return Data['crew'];
  }

  useEffect( () => {
    setData(getData());
  }, [])

  useEffect ( () => {
    if (data.length > 0) {
      const interval = setInterval( () => setCrewIndex( (prev) => (prev + 1) % data.length), 5000) 
      return () => {
        clearInterval(interval);
      }
    } 
  }, [crewIndex])

  return (
    <div className='crew-mainContainer'>
        <div className='crew-title'>
          <h1><span className='crew-spanIndex'>02</span> Meet our Crew</h1>
        </div>

        <div className='crew-content-main'>
          <div className='crew-image-container'>
            {
              data.length > 0 && <img src={data[crewIndex].images.png} className="crew-image"></img>
            }
            <hr></hr>
          </div>

          <div className='crew-info-main'>
            <div className='crew-tab-container'>
                {data.map( (value,index) => <div className={crewIndex === index ? 'crew-tab crew-active-tab' : 'crew-tab'} onClick={ () => setCrewIndex(index)}></div> )}
            </div>

            <div className='crew-info-container'>
              <div className='crew-heading'>
                { data.length > 0 && <h3 className='crew-role'>{data[crewIndex].role}</h3>}
                { data.length > 0 && <h1 className='crew-name'>{data[crewIndex].name}</h1>}

              </div>
              <div className='crew-info'>
                { data.length > 0 && <p className='crew-info-para'>{data[crewIndex].bio}</p>}
              </div>
            </div>

          </div>
        </div>


    </div>
  )
}
