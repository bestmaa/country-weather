import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCountryData } from "../action/DataAction";
import "./Search.css";
import Showcountry from "./Showcountry.js";
import Loader from "./Loader.js";

function Search() {
  const { data, loading } = useSelector((state) => state.CountryData);
  const [activeOrNot, setactiveOrNot] = useState(true)

  const dispatch = useDispatch();
  function searchName() {
    let argu = document.querySelector(".search").value;
    dispatch(getCountryData(argu));
  }
  return (
    <>
      <div className="search-box">
        <img
          className="imglogo"
          src="https://wovvtech.com/wp-content/uploads/2021/04/WOVV-Tech-Logo-Color-Tagline-1.png"
          alt=""
        />
        <input placeholder="Enter Your Country" type="text" className="search" onInput={(e)=>{
          if((e.target.value).length>0){
            setactiveOrNot(false)
          }else{
            setactiveOrNot(true)
          }
        }}/>

        <div className="search-btn">
          <button onClick={searchName} disabled={activeOrNot} >Search Country Name</button>
          <button disabled={true}>Search By Code Name</button>
        </div>
      </div>
      {loading && <Loader />}
      <div className="showcountrycard">
        {data &&
          Array.isArray(data) &&
          data.map((data, i) => <Showcountry data={data} key={i} k={i} />)}
      </div>
      {data?.message ? <h1>{data.message}</h1> : ""}
    </>
  );
}

export default Search;
