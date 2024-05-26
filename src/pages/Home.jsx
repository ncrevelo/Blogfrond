import React, { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../api';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId);
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  return (
    <div className="home-container">
      <h1 className="text-4xl font-bold mb-6">Bienvenido a My Blog</h1>
      <p className="text-lg mb-8">
        Aquí puedes encontrar una variedad de posts sobre diversos temas. ¡Explora y disfruta leyendo!
      </p>
      <button
        onClick={() => navigate('/add-post')}
        className="add-post-button"
      >
        Crear Nuevo Post
      </button>
      <div className="posts-grid">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.content.slice(0, 100)}...</p>
              <div className="post-actions">
                <button
                  onClick={() => navigate(`/posts/${post.id}`)}
                  className="read-more-button"
                >
                  Leer más
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="delete-button"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay posts disponibles</p>
        )}
      </div>
    </div>
  );
};

export default Home;

