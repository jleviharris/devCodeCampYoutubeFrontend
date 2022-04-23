import "../../index.css"
import React, { useState } from "react";
import IFrameInput from "../iframe";
// import CustomButton from "../Button";
// import CreateComment from "../Comments/CreateComment";
// import DisplayComments from "../Comments/DisplayComment";
import DisplayMainVideo from "./DisplayMainVideo";
import { useNavigate, Link } from "react-router-dom";

const MainCard = ({ title, id, RelatedV, setRelatedV, description }) => {
  let history = useNavigate();
  // const[Posts, setPosts] = useState([]);
  
  // function addNewPost(post){
  //   let tempPost = [post, ...Posts];
    
  //   setPosts(tempPost);
  // }
  return (
    <div className="main">
      <div className="card">
        <IFrameInput id={id} />
        <div className="card-body">
          <Link to="/SingleVideo"> <h5 className="card-title">{title}</h5></Link>
          <p>{description}</p>
          {/* <CustomButton/>
          
          <CreateComment createNewPost={addNewPost}/>
          <p>Comments</p>
          <DisplayComments parentPosts={Posts}/>
           */}
      
         
          
       </div> 
      </div>
    </div>
  );
};

export default MainCard;





  
