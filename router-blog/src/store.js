import { createStore, action, thunk, computed } from "easy-peasy";
import api from "./api/posts";

export default createStore({
  // State
  posts: [],
  postTitle: "",
  postBody: "",
  editTitle: "",
  editBody: "",
  search: "",
  searchResults: [],

  // Actions
  setPosts: action((state, payload) => {
    state.posts = payload;
  }),
  setPostTitle: action((state, payload) => {
    state.postTitle = payload;
  }),
  setPostBody: action((state, payload) => {
    state.postBody = payload;
  }),
  setEditTitle: action((state, payload) => {
    state.editTitle = payload;
  }),
  setEditBody: action((state, payload) => {
    state.editBody = payload;
  }),
  setSearch: action((state, payload) => {
    state.search = payload;
  }),
  setSearchResults: action((state, payload) => {
    state.searchResults = payload;
  }),

  postCount: computed((state) => state.posts.length),

  //this will return a post by id
  getPostById: computed((state) => {
    return (id) => state.posts.find((post) => post.id.toString() === id);
  }),

  // Thunks for async actions
  savePost: thunk(async (actions, newPost, helpers) => {
    const { posts } = helpers.getState();
    try {
      const response = await api.post("/posts", newPost);
      actions.setPosts([...posts, response.data]);
      actions.setPostTitle("");
      actions.setPostBody("");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }),

  deletePost: thunk(async (actions, id, helpers) => {
    const { posts } = helpers.getState();
    try {
      api.delete(`/posts/${id}`);
      actions.setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }),

   editPost: thunk(async (actions, updatedPost, helpers) => {
    const { posts } = helpers.getState();
    const { id } = updatedPost;
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      actions.setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      actions.setEditTitle("");
      actions.setEditBody("");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
     }),
});
