import React from 'react';
import { useParams, Link} from 'react-router-dom';
import './index.css';

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams(); //this id is that we passed as parameter in App.jsx route
  const post = posts.find(post => (post.id).toString() === id);
  return (
    <main className="PostPage">
      {post && (
        <article className='post'>
          <h1>{post.title}</h1>
          <p className='postDate'>{post.datetime}</p>
          <p className='postBody'>{post.body}</p>
          <button onClick={() => handleDelete(post.id)} >DELETE POST</button>
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