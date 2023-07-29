import './App.css';
import axios from 'axios';
import React, { useState } from 'react'
import WeatherNotify from './WeatherNotify';
import Input from './Input';



function App() {
  const key = 'e7a5e6824ab7d08351501ac5e7ba440b'  ;

  const [city,setCity] = useState('')

  const [outlet,setOutlet]=useState('')
  
  const fetchItem = async()=>{
     try {
        const responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`)
        setOutlet(responce.data)
        console.log(responce.data)

      } catch (err) {
        alert("Plse Enter Proper City Name")
     }
  }

  const handleSubmit = (e)=>{ 
    e.preventDefault()
    setCity('')
} 

  return (
    <div>
     
      <Input 
        city={city}
        setCity={setCity}
        handleSubmit={handleSubmit}
        outlet={outlet}
        fetchItem={fetchItem}
      />
     
     <WeatherNotify 
        outlet={outlet}
      />

     </div>
  
  
  );
}

export default App;
