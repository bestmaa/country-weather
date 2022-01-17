import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RowReturn from "./RowReturn";
import "./LoadPopUp.css";
import { useParams } from "react-router-dom";
import { getWeatherInfo } from "../action/weatherAction";

function LoadPopUp() {
  let params = useParams();
  const { wdata, error } = useSelector((state) => state.weather);
  const [Error, setError] = useState();
  const [LoadWeather, setLoadWeather] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeatherInfo(params.capital));
    console.log("dispatch");
  }, [dispatch,params]);

  useEffect(() => {
    setLoadWeather(
      <tbody>
        <RowReturn name="Capital name" value={params.capital} />
        <RowReturn
          name="temperature"
          value={
            wdata?.current?.temperature
              ? wdata.current.temperature
              : "Loading..."
          }
        />
        <RowReturn
          name="weather_icons"
          value={
            wdata?.current?.weather_icons[0]
              ? wdata?.current?.weather_icons[0]
              : "Loading..."
          }
        />
        <RowReturn
          name="wind_speed"
          value={
            wdata?.current?.wind_speed ? wdata.current.wind_speed : "Loading..."
          }
        />
        <RowReturn
          name="precip"
          value={wdata?.current?.precip ? wdata.current.precip : "Loading..."}
        />
      </tbody>
    );

    if (error) {
      // alert(error);
      setError(<h1>{error}</h1>);
    }
  }, [wdata, error,params]);
  return (
    <>
      {Error && Error}
      <div className="popup">
        <table>{LoadWeather}</table>
      </div>
    </>
  );
}

export default LoadPopUp;
