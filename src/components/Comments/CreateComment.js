import React, {useState} from 'react';

const CreateComment = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handlePost(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            postText: post,
            like: null,
            dislike: null
        };
        props.createNewPost(newPost);
    }

    return ( 
        <form onSubmit={handlePost}>
             <div className="form-group">
                <label>Name</label>
                <input  type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className="form-group">
                <label>Comment</label>
                <textarea className="form-control" type="text" value={post} onChange={(event) => setPost(event.target.value)} />
            </div>
            <button type='submit' className="btn btn-primary">Post</button>
        </form>
     );
}
 
export default CreateComment;