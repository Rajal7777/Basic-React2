import React, { useContext } from 'react';
import DataContext from './context/DataContext';
import Post from './Post';



const Home = () => {
    const { searchResults, fetchError, isLoading } = useContext(DataContext);
    return (
        <main className="Home">
            {isLoading && <p className="statusMsg">Loading posts...</p>}
            {fetchError && <p className="statusMsg" style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
            {!isLoading && !fetchError &&
                searchResults.length ?
                (<Post posts={searchResults} />)
                :
                (<p className="statusMsg">No posts to display.</p>)
            }
        </main>
    );
};

export default Home;