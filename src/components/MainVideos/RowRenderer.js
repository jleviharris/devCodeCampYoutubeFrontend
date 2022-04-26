import MainCard from "./MainCard";
import React from "react";

const RowRenderer = ({ Videos, RelatedV, setRelatedV, id, title, description, ID, setID, setTitle, Title, setDescription, Description}) => {
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
          ID={ID}
          setID={setID}
          setTitle={setTitle}
          setDescription={setDescription}
          Title={Title}
          Description={Description}
        />
      </div>
    );
  }
  return <div className="cardsBody">{cardHtml}</div>;
};

export default RowRenderer;




