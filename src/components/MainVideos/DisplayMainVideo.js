import React from 'react';
import IFrameInput from '../iframe';
import CustomButton from '../Button';
import CreateComment from '../Comments/CreateComment';
import DisplayComments from '../Comments/DisplayComment';
import DisplayRV from '../RelatedVideos/DisplayRV';
import { useState } from 'react';

const DisplayMainVideo = ({ ID, Title, Description, description }) => {
  const[Posts, setPosts] = useState([]);
  const header = "Commments"
  let count = 0
  
  function createNewPost(post){
    let tempPost = [post, ...Posts];
    
    setPosts(tempPost);
  }
  return (
    <div >
      <IFrameInput id={ID} />
      <div >
        <h5>{Title}</h5>
        <h6>{description}</h6>
        <CustomButton/>
        <CreateComment createNewPost={createNewPost} count={count}/>
        <p>{count} {header}</p>
        <DisplayComments parentPosts={Posts} count={count}/>
      </div>
      <div>
          {/* <DisplayRV RelatedV={RelatedV} setRelatedV={setRelatedV} id={id}/> */}
      </div>
    </div>
  )
}

export default DisplayMainVideo;