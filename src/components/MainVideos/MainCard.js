import "../../index.css"
import React, { useState } from "react";
import IFrameInput from "../iframe";
// import CustomButton from "../Button";
// import CreateComment from "../Comments/CreateComment";
// import DisplayComments from "../Comments/DisplayComment";
import DisplayMainVideo from "./DisplayMainVideo";
import { Link } from "react-router-dom";

const MainCard = ({ title, id, description, setID, setTitle, setDescription }) => {
  
  
  const handleClick = (e) => {
    setID(e.target.id);
    setTitle(e.target.title);
    setDescription(e.target.description);
    console.log(e.target);
    // console.log(Description);
    
  }
  
  
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
          <Link to="/SingleVideo"> <button onClick={handleClick}><h5 id={id} title={title} description={description} className="card-title">{title}</h5></button></Link>
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





  
