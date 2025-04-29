import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Home from "./home";
import Newpost from "./newpost";
import Postpage from "./postpage";
import About from "./about";
import Missing from "./missing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Routes>
        {/* switch is the v6 keyword in react its not working use routes instead of switch */}
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Newpost />} />
        <Route path="/post/:id" element={<Postpage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;