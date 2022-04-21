import "../index.css";
import { RelatedVideos } from "../Utilities/RelatedVideos";
import RVRenderer from "./RVRenderer";

const DisplayRV = ({OGVideoID, setRelatedV, RelatedV}) => {

  const searchRV = async () => {
    
    RelatedVideos(OGVideoID).then((videos) => setRelatedV(videos));
    // console.log(RelatedV[0].id.videoId)
  };
  return (
    <div className="mainRV">
     <button onClick={searchRV}>Related Videos</button>
     {RelatedV.length >0 ?  <RVRenderer RelatedV={RelatedV}/>:null}
    
    </div>
  );
};
export default DisplayRV;