import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';
import PostDetails from './PostDetails';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => <PostDetails key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
