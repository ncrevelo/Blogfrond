import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-post">Add Post</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
