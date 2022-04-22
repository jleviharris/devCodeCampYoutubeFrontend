import React, {useState} from 'react';

const CreateComment = (props) => {

    const [post, setPost] = useState('');

    function handlePost(event) {
        event.preventDefault();
        let newPost = {
            postText: post,
        };
        props.createNewPost(newPost);
    }

    return ( 
        <form onSubmit={handlePost}>
           
            <div className="form-group">
                <label>Comment</label>
                <textarea className="form-control" type="text" value={post} onChange={(event) => setPost(event.target.value)} />
            </div>
            <button type='submit' className="btn btn-primary">Post</button>
        </form>
     );
}
 
export default CreateComment;