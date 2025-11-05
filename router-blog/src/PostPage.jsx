import React, { useContext } from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom';
import DataContext from './context/DataContext';
import api from "./api/posts";
import './index.css';

const PostPage = () => {
   const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams(); //this id is that we passed as parameter in App.jsx route
  const post = posts.find(post => (post.id).toString() === id);
  const navigate = useNavigate();

    const handleDelete = (id) => {
      try {
        api.delete(`/posts/${id}`);
        const postsList = posts.filter((post) => post.id !== id);
        setPosts(postsList);
        navigate("/home");
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    };

  return (
    <main className="PostPage">
      {post && (
        <article className='post'>
          <h1>{post.title}</h1>
          <p className='postDate'>{post.datetime}</p>
          <p className='postBody'>{post.body}</p>
          <Link to={`/edit/${post.id}`} >
          <button className='editButton'>EDIT POST</button>
          </Link>
          <button onClick={() => handleDelete(post.id)} className='deleteButton'>DELETE POST</button>
        </article>
      ) }
      {!post && (
        <>
        <h1>NO POST FOUND!</h1>
        <p>
          <Link to='/home'>Visit HomePage</Link>
        </p>
        </>
      )}
    </main>
  );
};

export default PostPage;