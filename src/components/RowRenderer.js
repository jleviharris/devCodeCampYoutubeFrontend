import MainCard from "./MainCard";
import React from "react";

const RowRenderer = ({ Videos }) => {
  let cardHtml = [];
  for (let i = 0; i < Videos.length; i++) {
    cardHtml.push(
      <div className="testing ">
        <MainCard
          title={Videos[i].snippet.title}
          description={Videos[i].snippet.description}
          id={Videos[i].id.videoId}
        />
      </div>
    );
  }
  return <div className="cardsBody">{cardHtml}</div>;
};

export default RowRenderer;
