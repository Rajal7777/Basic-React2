import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Post = ({ posts }) => {

    return (
        <>
            {posts.map((post) => (
                console.log(typeof (post.body)),
                <article className='post' key={post.id}  >
                    <Link to={`/post/${post.id}`} >
                        <h2>{post.title}</h2>
                        <p className='postDate'>{post.datetime}</p>
                    </Link>
                    <p className='postBody'>
                        {(post.body).length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
                    </p>
                </article>
            ))}


        </>
    );
};

export default Post;