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
import { DataProvider } from './context/dataContext';

function App() {

  return (
    <div className="App">
      <DataProvider>
        <Header title="React JS Blog" />
        <Nav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/post" Component={NewPost} />
          <Route path="/edit/:id" Component={EditPost} />
          <Route path="/post/:id" Component={PostPage} />
          <Route path="/about" Component={About} />
          <Route path="*" Component={Missing} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;