import "../index.css";

import React from "react";
import VideoPlayer from "./VideoPlayer";

const MainCard = ({ title }) => {
  return (
    <div className="main">
      <div className="card" style={{ width: "10rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">yo</p>
          <p className="card-text">yes</p>
          <p className="card-text">yyy</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;

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
