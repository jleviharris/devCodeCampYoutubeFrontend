import "../index.css";
import { RelatedVideos } from "../Utilities/RelatedVideos";
import RVRenderer from "./RVRenderer";

const DisplayRV = ({OGVideoID, setRelatedV, RelatedV}) => {

  const searchRV = async () => {
    
    RelatedVideos(OGVideoID).then((videos) => setRelatedV(videos));
    
  };
  return (
    <div className="RV">
     <button onClick={searchRV}>Related Videos</button>
     {RelatedV.length >0 ?  <RVRenderer RelatedV={RelatedV}/>:null}
    
    </div>
  );
};
export default DisplayRV;