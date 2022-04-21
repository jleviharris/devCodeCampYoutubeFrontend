import MainCard from "./MainCard";
import React from "react";

const RowRenderer = ({ Videos, RelatedV, setRelatedV }) => {
  let cardHtml = [];
  for (let i = 0; i < Videos.length; i++) {
    cardHtml.push(
      <div className="testing">
        <MainCard
          RelatedV={RelatedV}
          setRelatedV={setRelatedV}
          title={Videos[i].snippet.title}
          description={Videos[i].snippet.description}
          id={Videos[i].id.videoId}
          // album={Videos[i].album}
          // artist={Videos[i].artist}
          // genre={Videos[i].genre}
          // releaseDate={Videos[i].releaseDate}
        />
      </div>
    );
  }
  return <div className="cardsBody">{cardHtml}</div>;
};

export default RowRenderer;




