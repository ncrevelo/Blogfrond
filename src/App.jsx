import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import PostDetail from './pages/PostDetail';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white py-4 shadow-md">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold">My Blog</h1>
          </div>
        </header>
        <main className="flex-grow container mx-auto py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/posts/:postId" element={<PostDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;


