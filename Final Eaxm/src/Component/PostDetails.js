import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, updatePost } from '../redux/actions/postActions';

const PostDetails = ({ post }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  const handleUpdate = () => {
    const updatedPost = prompt('Enter new content:', post.content);
    if (updatedPost) {
      dispatch(updatePost({ ...post, content: updatedPost }));
    }
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={handleUpdate}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PostDetails;
