import MainCard from "./MainCard";
import React from "react";

const RowRenderer = ({ Videos }) => {
  let cardHtml = [];
  for (let i = 0; i < Videos.length; i++) {
    cardHtml.push(
      <div style={{ display: "inline-block" }}>
        <MainCard
          title={Videos[i].snippet.title}
          // album={Videos[i].album}
          // artist={Videos[i].artist}
          // genre={Videos[i].genre}
          // releaseDate={Videos[i].releaseDate}
        />
      </div>
    );
  }
  return <div>{cardHtml}</div>;
};

export default RowRenderer;
