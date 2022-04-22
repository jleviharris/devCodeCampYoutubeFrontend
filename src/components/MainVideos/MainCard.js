import "../../index.css"
import React, { useState } from "react";
import IFrameInput from "../iframe";
import CustomButton from "../Button";
import DisplayRV from "../RelatedVideos/DisplayRV";
import CreateComment from "../Comments/CreateComment";
import DisplayComments from "../Comments/DisplayComment";

const MainCard = ({ title, id, RelatedV, setRelatedV, description }) => {
  const[Posts, setPosts] = useState([]);
  
  function addNewPost(post){
    let tempPost = [post, ...Posts];
    
    setPosts(tempPost);
  }
  return (
    <div className="main">
      <div className="card">
        <IFrameInput id={id} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{description}</p>
          <CreateComment createNewPost={addNewPost}/>
          <DisplayComments parentPosts={Posts}/>
          <p>Comments</p>
          {/* <Comments className="card-text"/> */}
          <CustomButton/>
          <DisplayRV RelatedV={RelatedV} setRelatedV={setRelatedV} OGVideoID={id}/>
        </div>
      </div>
    </div>
  );
};

export default MainCard;





  
