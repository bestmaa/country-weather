import React from "react";
import ReactJson from "react-json-view";

function RowReturn({ name, value }) {
  return (
    <>
      {name === "Latlng" ? (
        <tr>
          <td>{name}</td>
          <td>
            :<ReactJson src={value} name={false} />
          </td>
        </tr>
      ) : (
        <>
          {name === "weather_icons" ? (
            <tr>
              <td>{name}</td>
              <td>
                :<img src={value} style={{width:"30px"}} alt={name}/>
              </td>
            </tr>
          ) : (
            <tr>
              <td>{name}</td>
              <td>:{value}</td>
            </tr>
          )}
        </>
      )}
    </>
  );
}

export default RowReturn;
