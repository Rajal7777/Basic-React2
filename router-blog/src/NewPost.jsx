import React from 'react';
import './index.css';

const NewPost = ({postTitle, setPostTitle, postBody, setPostBody, handleSubbmit}) => {
    return (
        <main className="NewPost">
            <h2>Posts</h2>
            <form className='newPostForm' onSubmit={handleSubbmit}>
                <label htmlFor="postTitle">Title:</label>
                <input 
                    type="text" 
                    id="postTitle"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value )} />

                <label htmlFor="postBody">Post:</label>
                <textarea 
                    type="text" 
                    id="postTitle"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value )} />
                    <button type='submit'>CREATE POST</button>

                </form>
            </main>
    );
};

export default NewPost;