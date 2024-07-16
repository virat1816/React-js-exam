import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './Component/PostList';
import PostForm from './Component/PostForm';
import Navbar from './Component/Navbar';
import PrivateRoute from './Component/PrivateRoute'; 
const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/add" element={<PrivateRoute element={<PostForm />} />} />
      </Routes>
    </div>
  </Router>
);

export default App;
