import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPost, updatePost, deletePost } from '../api';
import './PostDetail.css';

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const data = await getPost(postId);
      setPost(data);
      setTitle(data.title);
      setContent(data.content);
    } catch (error) {
      console.error('Failed to fetch post:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedPost = await updatePost(postId, { title, content });
      setPost(updatedPost);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update post:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deletePost(postId);
      navigate('/');
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-detail-container">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <p className="text-lg mb-8">{post.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
