import React from "react";

const IFrameInput = ({id}) => {
    const source = `https://www.youtube.com/embed/${id}`;
    return (
        <div>
        <iframe width="420" height='345' src={source}></iframe>
        </div>
    )
}

export default IFrameInput;