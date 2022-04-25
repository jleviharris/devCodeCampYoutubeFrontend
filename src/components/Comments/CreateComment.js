import React, {useState} from 'react';

const CreateComment = ({createNewPost, count}) => {

    const [post, setPost] = useState('');
    const handleCount = () => {count++;};
    console.log({count});
    
    function handlePost(event) {
        event.preventDefault();
        let newPost = {
            postText: post,
        };
        createNewPost(newPost);
    }

    return ( 
        <form onSubmit={handlePost}>
           
            <div className="form-group">
                <label>Comment</label>
                <textarea className="form-control" type="text" value={post} onChange={(event) => setPost(event.target.value)} />
            </div>
            <button onClick={handleCount} type='submit' className="btn btn-primary">Post</button>
        </form>
     );
}
 
export default CreateComment;