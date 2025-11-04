import React from 'react';
import Post from './Post';
import './index.css';

const Home = ({posts, fetchError, isLoading}) => {

   return (
        <main className="Home">
        {isLoading && <p className="statusMsg">Loading posts...</p>}
        {fetchError && <p className="statusMsg" style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError &&
        posts.length ? (
        <Post  posts={posts} /> 
        ) : (
            <p className="statusMsg">No posts to display.</p>
        )}
        </main>
    );
};

export default Home;