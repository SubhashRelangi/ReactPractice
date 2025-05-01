import Header from './header';
import Nav from './Nav';
import Footer from './footer';
import Home from './home';
import NewPost from './newpost';
import PostPage from './postpage';
import EditPost from './editPost';
import About from './about';
import Missing from './missing';
import { Route, Routes } from 'react-router-dom';
// import { DataProvider } from './context/dataContext';
import { useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';
import useAxiosFetch from './hooks/useAxiosFetch';

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <div className="App">
      {/* <DataProvider> */}
      <Header title="React JS Blog" />
      <Nav />
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} fetchError={fetchError} />} />
        <Route path="/post" element={<NewPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      {/* </DataProvider> */}
      <Footer />
    </div>
  );
}

export default App;