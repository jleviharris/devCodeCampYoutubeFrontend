import "../../index.css";
import { RelatedVideos } from "../../Utilities/RelatedVideos";
import RVRenderer from "./RVRenderer";


const DisplayRV = ({id, setRelatedV, RelatedV}) => {

  const searchRV = async () => {
    
    RelatedVideos(id).then((videos) => setRelatedV(videos));
   console.log(RelatedV);
    
  };
  return (
    <form  onSubmit={(e) => {
      e.preventDefault();
    }} className="RV">
     <button onClick={searchRV}>Related Videos</button>
     <RVRenderer RelatedV={RelatedV}/>
    </form>
  );
};
export default DisplayRV;