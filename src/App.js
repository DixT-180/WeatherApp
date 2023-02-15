
import { useState } from 'react';
import './App.css';
import Weatherdata from './Weatherdata';


const API_url = 'https://api.openweathermap.org/data/2.5/weather?'

function App() {

const [temperature,setTemperature]= useState('')
const [weatherValue,setWeatherValue]= useState('')
const [iconValue,setIconValue] = useState('')
const [textValue,setTextValue]=useState('')
const [buttonValue,setButtonValue] = useState(false)
const [sunriseValue,setSunriseValue] = useState('')
const [sunsetValue,setSunsetValue] = useState()

const textChange = (value)=>{
  setTextValue(value);
 console.log(textValue)
 setButtonValue(false)

}





  const submitLocation = async(text)=>{
    

const response = await fetch (`${API_url}q=${text}&appid=d353d4db10fe8b364a2446e49e204ee4`)

const weatherdata =await response.json();
console.log(weatherdata)

const {temp } = weatherdata.main
console.log(weatherdata.weather)
console.log(weatherdata.sys)

const {main,icon,description} = weatherdata.weather[0]
const {sunrise,sunset} = weatherdata.sys
console.log(sunrise,sunset,description)

const sunriseTime = new Date(sunrise * 1000 ).toString()

const sunsetTime = new Date(sunset * 1000).toString()



setSunriseValue(sunriseTime)
setSunsetValue(sunsetTime)

// const hours = sunsetTime.getHours();
// const minutes = sunsetTime.getMinutes();
// const seconds = sunsetTime.getSeconds();

// console.log(hours,minutes,seconds)




// convert sunrise time to local time

console.log(sunriseTime)

console.log(sunsetTime)


console.log(main,icon)

setTemperature(temp)
setWeatherValue(description)
setIconValue(icon)
setButtonValue(true)


  }


 

    const showWeatherStats = ()=>{
    const icon_url = `http://openweathermap.org/img/wn/${iconValue}@2x.png` 



      return (
      <>
      {buttonValue ?(<Weatherdata Temperature = {   temperature} weatherType = {weatherValue} iconType = {icon_url} sunrise={sunriseValue} sunset={sunsetValue}  />) :(<div className="empty">
          <h1>WeatherDats</h1>
        </div>) }


        
           


      </>
      )
    }


  return (
    <div className="App">
     <div className='InputField' >

      <input type="text" onChange={(e)=>textChange(e.target.value)}   ></input>
      <button onClick={()=>submitLocation(textValue)}  >Search</button>
  {showWeatherStats(temperature)}
     </div>
    </div>
  );
}

export default App;
