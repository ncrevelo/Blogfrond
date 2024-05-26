import React from 'react';

const PostCard = ({ post, onDelete, onReadMore }) => {
  return (
    <div className="post-card">
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.content.slice(0, 100)}...</p>
      <div className="post-actions">
        <button onClick={onReadMore} className="read-more-button">Leer más</button>
        <button onClick={onDelete} className="delete-button">Eliminar</button>
      </div>
    </div>
  );
};

export default PostCard;
