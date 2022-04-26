import React from "react";

const DisplayComments = (props) => {
    return ( 
        <div className="bottom-container">
            {props.parentPosts.map((post) => {
                return ( 
                    <div className='text-center text'>{post.postText}</div>
                )
            })}
     </div>
     );
}
 
export default DisplayComments;