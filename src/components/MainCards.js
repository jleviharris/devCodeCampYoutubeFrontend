import "../index.css";
import React from "react";

const MainCards = ({Videos}) => {
  return (
    <div className="dataResults">
    {Videos.map((value, index) => {
        return (
          <div key={index}>
            <div>{value.id.videoId}</div>
          </div>
        );
    })}
    </div>)}
  

export default MainCards;


// const CardMain = ({ title, artist, album, genre, releaseDate }) => {
//   return (
//     <div className="main">
//       <div className="card" style={{ width: "10rem" }}>
//         <div className="card-body">
//           <img
//             className="card-img-top"
//             style={{ width: "10rem" }}
//             src={musicImage}
//             alt="Card image cap"
//           />
//           <h5 className="card-title">
//             {title} - {artist}
//           </h5>
//           <p className="card-text">{album}</p>
//           <p className="card-text">{genre}</p>
//           <p className="card-text">{releaseDate}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardMain;