import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from "date-fns";
import { useStoreState, useStoreActions } from 'easy-peasy';

const EditPost = () => {
    const navigate = useNavigate();
    const { id } = useParams();


    const editTitle = useStoreState((state) => state.editTitle);
    const editBody = useStoreState((state) => state.editBody);

    const editPost = useStoreActions((actions) => actions.editPost);
    const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
    const setEditBody = useStoreActions((actions) => actions.setEditBody);
    const getPostById = useStoreState((state) => state.getPostById);

    // const post = posts.find(post => (post.id).toString() === id);
    const post = getPostById(id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody]);

    //Update
    const handleEdit = (id) => {
        const datetime = format(new Date(), "MMMM dd, yyyy pp");
        const updatedPost = { id, title: editTitle, datetime, body: editBody };
        editPost(updatedPost);
        navigate(`/post/${id}`);

    };

    return (
        <main className="NewPost">
            {editTitle &&
                <>
                    <h2>Edit post</h2>
                    <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input
                            type="text"
                            id="postTitle"
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)} />

                        <label htmlFor="postBody">Post:</label>
                        <textarea
                            type="text"
                            id="postBody"
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)} />
                        <button type='button' onClick={() => handleEdit(post.id)}>EDIT POST</button>
                    </form>
                </>
            }
            {!editTitle &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to="/home">Visit Our Home Page</Link>
                    </p>
                </>}
        </main>
    );
};

export default EditPost;