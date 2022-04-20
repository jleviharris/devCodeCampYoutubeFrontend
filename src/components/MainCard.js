import "../index.css";
import React from "react";
import IFrameInput from "./iframe";
import CustomButton from "./Button";

const MainCard = ({ title, id }) => {
  return (
    <div className="main">
      <div className="card" style={{ width: "10rem" }}>
        <IFrameInput id={id}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Comments</p>
          <CustomButton/>
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
