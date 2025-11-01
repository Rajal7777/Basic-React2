import React from 'react';
import Post from './Post';
import './index.css';

const Home = ({posts }) => {

   return (
        <main className="Home">
            {posts.length ? (
                <Post posts={posts} />
            ) :  <p>NO POSTS</p> }
        </main>
    );
};

export default Home;