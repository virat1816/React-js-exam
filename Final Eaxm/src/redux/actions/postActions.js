import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const addPost = (post) => async (dispatch) => {
  const response = await axios.post('http://localhost:5000/posts', post);
  dispatch({ type: 'ADD_POST', payload: response.data });
};

export const updatePost = (post) => async (dispatch) => {
  const response = await axios.put(`http://localhost:5000/posts/${post.id}`, post);
  dispatch({ type: 'UPDATE_POST', payload: response.data });
};

export const deletePost = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/posts/${id}`);
  dispatch({ type: 'DELETE_POST', payload: id });
};
