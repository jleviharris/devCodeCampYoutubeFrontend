import "../index.css";
import React from "react";
import IFrameInput from "./iframe";
import CustomButton from "./Button";
import DisplayRV from "./DisplayRV";

const MainCard = ({ title, id, RelatedV, setRelatedV, description }) => {
  return (
    <div className="main">
      <div className="card">
        <IFrameInput id={id} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{description}</p>
          <p className="card-text">comments</p>
          <CustomButton/>
          <DisplayRV RelatedV={RelatedV} setRelatedV={setRelatedV} OGVideoID={id}/>
        </div>
      </div>
    </div>
  );
};

export default MainCard;





  
