import { useNavigate } from 'react-router-dom';
import { format } from "date-fns";
import { useStoreState, useStoreActions } from 'easy-peasy';


const NewPost = () => {
  const navigate = useNavigate();

  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);

  const savePost = useStoreActions((actions) => actions.savePost);
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);

  const handleSubbmit = (e) => {
    e.preventDefault();
    const id = posts.length ? String(Number(posts[posts.length - 1].id) + 1) : "1";
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    savePost(newPost);
    navigate('/home');
  };

  return (
    <main className="NewPost">
      <h2>Posts</h2>
      <form className='newPostForm' onSubmit={handleSubbmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="postTitle"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)} />

        <label htmlFor="postBody">Post:</label>
        <textarea
          type="text"
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)} />
        <button type='submit'>CREATE POST</button>

      </form>
    </main>
  );
};

export default NewPost;