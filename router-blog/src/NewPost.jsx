import React, { useContext, useState } from 'react';
import {useNavigate } from 'react-router-dom'
import './index.css';
import DataContext from './context/DataContext';
import { format } from "date-fns";
import api from "./api/posts";

const NewPost = () => {
      const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const {  posts, setPosts} = useContext(DataContext);
    const navigate = useNavigate();
      const handleSubbmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? String(Number(posts[posts.length - 1].id) + 1) : "1";
    
        const datetime = format(new Date(), "MMMM dd, yyyy pp");
        const newPost = { id, title: postTitle, datetime, body: postBody };
        try {
          const response = await api.post('/posts', newPost);
          const allPosts = [...posts, response.data];
          setPosts(allPosts);
          setPostTitle("");
          setPostBody("");
          navigate("/home");
        } catch (error) {
          console.log(`Error: ${error.message}`);
        }
      };

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