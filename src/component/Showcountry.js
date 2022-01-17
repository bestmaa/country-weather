import React, { useEffect, useState } from "react";
import RowReturn from "./RowReturn";
import "./ShowCountry.css";
import { Link } from "react-router-dom";

function Showcountry({ data }) {
  const [LoadCountryInfo, setLoadCountryInfo] = useState();
  
  useEffect(() => {
    if (data) {
      setLoadCountryInfo(
        <tbody>
          <RowReturn name="Country" value={data.name.common} />
          <RowReturn name="Capital" value={data.capital} />
          <RowReturn name="Population" value={data.population} />
          <RowReturn name="Latlng" value={data.latlng} />
        </tbody>
      );
    }
  }, [data]);
  return (
    <>
      <div className="card">
        <img src={data.flags.png} alt="Avatar" />
        <div className="container ">
          <table>{LoadCountryInfo}</table>
          <div style={{ textAlign: "center" }}>
            <Link
              to={`loadpage/${data.capital}`}
              target="_blank"
              style={{ cursor: "pointer" }}
            >
              Capital Weather
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Showcountry;
