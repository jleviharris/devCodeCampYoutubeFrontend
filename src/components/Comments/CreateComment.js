import React, {useState} from 'react';

const CreateComment = ({createNewPost, count}) => {

    const [post, setPost] = useState('');
    const handleCount = () => {count++;};
    
    function handlePost(event) {

        // app.post("/api/comments", (req, res) => {
        //     const newComment = req.body;
        //     const addedComment = repoContext.comments.createComment(newComment)
        //     return res.status(201).send(addedComment);
        // });
        event.preventDefault();
        let newPost = {
            postText: post,
        };
        createNewPost(newPost);
    }

    return ( 
        <form onSubmit={handlePost}>
           <label>Comment</label>
            <div className="form-group">
                <textarea className="form-control" type="text" value={post} onChange={(event) => setPost(event.target.value)} />
                <button onClick={handleCount} type='submit' className="btn btn-primary">Post</button>
            </div> 
        </form>
     );
}
 
export default CreateComment;