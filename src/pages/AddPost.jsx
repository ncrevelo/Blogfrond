import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../api';
import './AddPost.css';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert('Por favor, complete ambos campos.');
      return;
    }
    try {
      const newPost = await createPost({ title, content });
      navigate(`/posts/${newPost.id}`);
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  return (
    <div className="add-post-container">
      <h1 className="text-4xl font-bold mb-6">Crear Nuevo Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Título
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Contenido
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="submit-button bg-green-500 text-white py-2 px-4 rounded"
        >
          Crear Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;



