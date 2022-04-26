import "../../index.css"
import IFrameInput from "../iframe";
import { Link } from "react-router-dom";

const MainCard = ({ title, id, description, setID, setTitle, setDescription }) => {
  
  const handleClick = (e) => {
    setID(e.target.id);
    setTitle(e.target.title);
    setDescription(e.target.description);
  }
  
  return (
    <div className="main">
      <div className="card">
        <IFrameInput width="700px" id={id} />
        <div className="card-body">
          <Link to="/SingleVideo"> <button onClick={handleClick}><h5 id={id} title={title} description={description} className="card-title">{title}</h5> <p>{description}</p></button></Link>     
       </div> 
      </div>
    </div>
  );
};

export default MainCard;





  
