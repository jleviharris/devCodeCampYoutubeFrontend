import React from "react";

const Iframe = ({value}) => {
    const source = `https://www.youtube.com/embed/${value}`;
    return (
        <div>
        <iframe width="420" height='345' src={source}></iframe>
        </div>
    )
}

export default Iframe;