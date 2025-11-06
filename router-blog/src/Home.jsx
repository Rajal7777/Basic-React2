import Post from './Post';
import { useStoreState } from 'easy-peasy';


const Home = ({ fetchError, isLoading }) => {
    const searchResults  = useStoreState((state) => state.searchResults);

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