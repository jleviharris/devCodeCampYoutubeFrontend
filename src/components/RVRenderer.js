import RVCard from "./RVCard";

import React from "react";

const RVRenderer = ({ RelatedV }) => {
  let cardHtml = [];
  for (let i = 0; i < RelatedV.length; i++) {
    cardHtml.push(
      <div style={{ display: "inline-block" }}>
        <RVCard
          // title={RelatedV.items[i].title}
          id={RelatedV[i].id.videoId}
        />
      </div>
    );
  }
  return <div className="cardsBody">{cardHtml}</div>;
};

export default RVRenderer;