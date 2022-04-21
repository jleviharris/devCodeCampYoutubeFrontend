import IFrameInput from "./iframe";
import React from "react";

const RVCard = ({ id }) => {
    return (
      <div className="main">
        <div className="card" style={{ width: "2rem" }}>
          <IFrameInput id={id}/>
          <div className="card-body">
            {/* <h5 className="card-title">{title}</h5> */}
          </div>
        </div>
      </div>
    );
  };
  
  export default RVCard;