import Feed from './feed';
import { useStoreState } from 'easy-peasy';
// import DataContext from './context/dataContext';
// import { useContext } from 'react'

const Home = ({ isLoading, fetchError }) => {

    const searchResults = useStoreState((state) => state.searchResults);
    //const { searchResults, fetchError, isLoading } = useContext(DataContext);

    return (
        <main className="Home">
            {isLoading && <p className="statusMsg">Loading posts...</p>}
            {!isLoading && fetchError && <p className="statusMsg" style={{ color: "red" }}>{fetchError}</p>}
            {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults} /> : <p className="statusMsg">No posts to display.</p>)}
        </main>
    )
}

export default Home

