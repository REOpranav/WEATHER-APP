import { React, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {useCbTexts , useCbFlags } from 'configbee-react'


const Input = ({
  handleSubmit,
  fetchItem,
  city,
  setCity,
  outlet,
  currentDay,
}) => {
  const [temperature, setTemperature] = useState(
    "https://i.pinimg.com/236x/46/82/e7/4682e77dde13f8d322a71c625a3257f5.jpg"
  );

  const tempe = () => {
    let temp = outlet ? Number(outlet.main.temp.toFixed()) : null;

    switch (true) {
      case temp >= 85:
        setTemperature(
          "https://i.pinimg.com/564x/f2/84/c5/f284c5a15c983ad1cf564b120a920e53.jpg"
        );
        break;

      case temp >= 70:
        setTemperature(
          "https://i.pinimg.com/236x/67/31/fc/6731fc3be85e249189ba746f20289504.jpg"
        );
        break;

      case temp >= 60:
        setTemperature(
          "https://i.pinimg.com/236x/8d/a1/2e/8da12ef45db6d24adcccfdb9470c0bde.jpg"
        );
        break;

      case temp <= 60:
        setTemperature(
          "https://i.pinimg.com/564x/ea/59/fd/ea59fdc60e60d62cc77e3366b525f4c9.jpg"
        );
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    tempe();
  }, [outlet, setTemperature]); //  'outlet' in  dependency in useEffect
  
  const {mainbutton:buttonName , colorbutton}  = useCbTexts()
  const {isloading} = useCbFlags()

  return (
    <div className="container  input-container">
      <form onSubmit={handleSubmit}>
        {" "}
        {/* onsubmitting */}
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city Name "
        />
 
        {/* submit button */}
        <div class="d-grid gap-2 col-12">
          <button
            class="btn btn-primary submit"
            type="button"
            onClick={fetchItem}
          >
              {isloading === true ? buttonName : 'vadivel' } {/*this line in configbee */}
          </button>
        </div>
      </form>

      {/* this is for temperature image  */}
      <div className="image">
        <img
          src={temperature}
          alt="vector sun image"
          class="img-fluid"
          width={150}
        />
      </div>

      {/* this code for getting temperature */}

      <div className="big-temp">
        {outlet && (
          <h1 class="display-1">
            {outlet ? outlet.main.temp.toFixed() : null}°C{" "}
          </h1>
        )}
      </div>

      <div class="container detail">
        {/* this is for getting humudity */}

        <p className="lead" >
          humidity{" "}
          {outlet && (
            <span className="lead">
              {" "}
              <b>{outlet ? outlet.main.humidity : null}</b> %
            </span>
          )}
        </p>

        {/* this code for get wind spped */}

        <p className="lead">
          {" "}
          wind speed{" "}
          {outlet && (
            <span className="lead">
              {" "}
              <b>{outlet ? outlet.wind.speed.toFixed() : null}</b> MPH
            </span>
          )}
        </p>
      </div>

      {/* this code for a day */}
      <div className="day">
        <h1 class="lead display-6 "> {currentDay}</h1>
      </div>
    </div>
  );
};

export default Input;
