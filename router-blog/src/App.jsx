import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import EditPost from "./EditPost";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import api from "./api/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const navigate = useNavigate();


  //axios get request to fetch posts from data/db.json
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data.posts || response.data);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.log("Response data:", error.response.data);
          console.log("Response status:", error.response.status);
          console.log("Response headers:", error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleDelete = (id) => {
    try {
      const postsList = posts.filter((post) => post.id !== id);
      api.delete(`/posts/${id}`);
      setPosts(postsList);
      navigate("/home");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const handleSubbmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? String(Number(posts[posts.length - 1].id) + 1) : "1";

    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post('posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      navigate("/home");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
  //Update
  const handleEdit = async (id) => {

    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map(post => post.id === id ? { ...response.data } : post),
        setEditTitle(""),
        setEditBody(""),
        navigate("/home")
      );
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };


  return (
    <div className="App">
      <Header title={"Blog APP"} />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/home" element={<Home posts={searchResults} />} />
        <Route
          path="/post"
          element={
            <NewPost
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
              handleSubbmit={handleSubbmit}
            />
          }
        />

        <Route
          path="/edit/:id"
          element={
            <EditPost
              posts={posts}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editBody={editBody}
              setEditBody={setEditBody}
              handleEdit={handleEdit}
            />
          }
        />

        <Route
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
