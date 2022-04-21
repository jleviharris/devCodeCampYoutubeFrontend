import "../index.css";

import CustomButton from "./Button";
import IFrameInput from "./iframe";
import React from "react";

const MainCard = ({ title, id, description }) => {
  return (
    <div className="main">
      <div className="card">
        <IFrameInput id={id} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{description}</p>
          <p className="card-text">Comments</p>
          <CustomButton />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
