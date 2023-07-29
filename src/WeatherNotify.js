import React, { useState,useEffect } from 'react'


const WeatherNotify = ({outlet}) => {
    
  return (
    
        <div className='weather-notify'>
          {outlet  && 
              <h1>{outlet ? outlet.main.temp.toFixed():null}°C </h1>  
            }     
        </div>
   
  )
}


export default WeatherNotify