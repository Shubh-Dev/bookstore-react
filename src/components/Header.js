import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Link className="nav" to="/BooksList">Books</Link>
      <Link className="nav" to="/Categories">Categories</Link>

    </>
  );
}

export default Header;
