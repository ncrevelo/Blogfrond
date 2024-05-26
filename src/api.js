const BASE_URL = 'http://127.0.0.1:8000';

export const getPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts/`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const data = await response.json();
  return data;
}

export const createPost = async (post) => {
  const response = await fetch(`${BASE_URL}/posts/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  if (!response.ok) {
    throw new Error('Failed to create post');
  }
  const data = await response.json();
  return data;
};

export const getPost = async (id) => {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  const data = await response.json();
  return data;
};

export const updatePost = async (id, post) => {
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  if (!response.ok) {
    throw new Error('Failed to update post');
  }
  const data = await response.json();
  return data;
};

export const deletePost = async (id) => {
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete post');
  }
};


