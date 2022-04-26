import IFrameInput from "../iframe";
import React from "react";

const RVCard = ({ id }) => {
    return (
      <div >
        <div style={{ width: "12rem" }}>
          <IFrameInput id={id}/>
          <div >
            {/* <h5 className="card-title">{itle}</h5> */}
          </div>
        </div>
      </div>
    );
  };
  
  export default RVCard;