import React from 'react';
import IFrameInput from '../iframe';
import CustomButton from '../Button';
import CreateComment from '../Comments/CreateComment';
import DisplayComments from '../Comments/DisplayComment';
import DisplayRV from '../RelatedVideos/DisplayRV';
import { useState } from 'react';

const DisplayMainVideo = ({id, title, description, RelatedV, setRelatedV }) => {
  const[Posts, setPosts] = useState([]);
  
  function addNewPost(post){
    let tempPost = [post, ...Posts];
    
    setPosts(tempPost);
  }
  return (
    <div >
     <IFrameInput id={id} />
    <div >
      <h5>{title}</h5>
      <p>{description}</p>
      <CustomButton/>
      <CreateComment createNewPost={addNewPost}/>
      <p>Comments</p>
      <DisplayComments parentPosts={Posts}/>
    </div>
    <div>
        <DisplayRV RelatedV={RelatedV} setRelatedV={setRelatedV} OGVideoID={id}/>
    </div>
    </div>
  )
}

export default DisplayMainVideo;