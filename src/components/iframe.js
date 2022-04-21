import React from "react";

const IFrameInput = ({ id }) => {
  const source = `https://www.youtube.com/embed/${id}`;
  return (
    <div className="iframes">
      <iframe width="100%" height="100%" src={source} frameBorder="0"></iframe>
    </div>
  );
};

export default IFrameInput;