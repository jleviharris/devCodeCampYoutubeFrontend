import React from "react";

const IFrameInput = ({id}) => {
    const source = `https://www.youtube.com/embed/${id}`;
    return (
        <div>
        <iframe width="100%" height='345' src={source}></iframe>
        </div>
    )
}

export default IFrameInput;