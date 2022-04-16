import "../index.css";
import React from "react";

const MainCards = ({Videos}) => {
  return (
    <div className="dataResults">
    {Videos.map((value, key) => {
        return (
          <div>
          <div>{value.etag}</div>
        </div>
        );
    })}
    </div>)}
  

export default MainCards;
