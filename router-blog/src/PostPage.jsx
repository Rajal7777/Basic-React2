import React from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';


const PostPage = () => {
  const { id } = useParams(); //this id is that we passed as parameter in App.jsx route
  const navigate = useNavigate();
 const deletePost = useStoreActions((actions) => actions.deletePost);
 const getPostById = useStoreState((state) => state.getPostById);
 const post = getPostById(id);



    const handleDelete = (id) => {
    deletePost(id);
    navigate('/home');
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