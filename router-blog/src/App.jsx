import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import EditPost from "./EditPost";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {

  return (
    <div className="App">
      <Header title={"Blog APP"} />
      <DataProvider>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/post" element={<NewPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
