import React from 'react'

const Weatherdata = (props) => {
  return (
<>
<div className='container'>
    <div className='weather'>
      <h1>WeatherDats</h1>
       <img src = {props.iconType}/>
    <div>Temperature: {Math.round(props.Temperature - 273)}°C </div>
    <div>{props.weatherType}</div>
   
    <div>sunrise: {props.sunrise}</div>
     <div>sunset: {props.sunset}</div>

     </div>

     </div>
</>
  )
}

export default Weatherdata