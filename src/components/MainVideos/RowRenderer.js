import MainCard from "./MainCard";
import React from "react";


const RowRenderer = ({ Videos, RelatedV, setRelatedV }) => {
  let cardHtml = [];
  for (let i = 0; i < Videos.length; i++) {
    cardHtml.push(
      <div className="testing">
        <MainCard
          // RelatedV={RelatedV}
          // setRelatedV={setRelatedV}
          title={Videos[i].snippet.title}
          description={Videos[i].snippet.description}
          id={Videos[i].id.videoId}
        />
        {/* <DisplayRV RelatedV={RelatedV} setRelatedV={setRelatedV} OGVideoID={Videos[i].id.videoId}/> */}
      </div>
    );
  }
  return <div className="cardsBody">{cardHtml}</div>;
};

export default RowRenderer;




