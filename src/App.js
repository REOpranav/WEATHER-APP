import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Input from "./Input";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {useCbTexts, useCbStatus } from 'configbee-react'
import LoadingOutlined from '@ant-design/icons'

function App() {
  const key = "e7a5e6824ab7d08351501ac5e7ba440b";

  const [city, setCity] = useState(""); // this code for set city

  const [outlet, setOutlet] = useState(""); // this is for getting data from input

  const {colorbutton} = useCbTexts()
  const cbStatus = useCbStatus()


  const fetchItem = async () => {
    //using axios method
    try {
      const responce = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`
      );
      setOutlet(responce.data); // ste that data in setoutlet variable
    } catch (err) {
      alert("plse enter city name properly");
    }
  };

  const [currentDay, setCurrentDay] = useState(""); // this variable for current day

  //use useeffect for finding day
  useEffect(() => {
    const getCurrentDay = () => {
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const today = new Date();
      const dayIndex = today.getDay();
      return daysOfWeek[dayIndex];
    };

    setCurrentDay(getCurrentDay());
  }, []);

  // handle submit function for submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchItem()
    setCity("");
  };
  
  if (cbStatus !== "ACTIVE") {
    return <p style={{color:'red'}}><LoadingOutlined /></p>
  }

  
  return (
    <>
    
    <div className="container outer" style={{backgroundColor :`${colorbutton}`}}>
      <div className="inner">
        <Input
          city={city}
          setCity={setCity}
          handleSubmit={handleSubmit}
          outlet={outlet}
          fetchItem={fetchItem}
          currentDay={currentDay}
        />
      </div>
    </div>
    
    </>
  );
}

export default App;