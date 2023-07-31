import React from 'react'

const Input = ({handleSubmit,fetchItem,city,setCity,outlet}) => {
  return (
   <div className='input-city-name' >
     <form onSubmit={handleSubmit}>    
        <input
          type="text"
          name = 'city'
          id='city'    
          value= {city}
          onChange={(e)=>setCity(e.target.value)}  
          placeholder='Enter city Name '      
      />

        <button
            className='button'
            onClick={fetchItem}
       >
          Fetch
        </button>
  </form> 

       <div className='weather-details'>
         <h3>weather details</h3>
       </div>

    
        <div className='weather-data'>
            <p>city name   {outlet  && <span className='span-four'><b>{outlet ? outlet.name:null}</b></span>}</p>
            <p>temperature {outlet  && <span className='span-one'><b> {outlet ? outlet.main.temp.toFixed():null}</b>°C</span>}</p>
            <p>humidity    {outlet  && <span className='span-two'><b>{outlet ? outlet.main.humidity:null}</b> %</span>}</p>
            <p>wind speed  {outlet  && <span className='span-three'><b>{outlet ? outlet.wind.speed.toFixed():null}</b> MPH</span>}</p>
         </div>
       
</div>

  )
}

export default Input