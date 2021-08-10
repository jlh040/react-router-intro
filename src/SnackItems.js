import React from 'react';
import { Link } from 'react-router-dom';

const SnackItems = () => {
  return (
    <nav>
      <Link exact to="/chocolatebar">Chocolate Bar</Link>
      <Link exact to="/skittles">Skittles</Link>
      <Link exact to="/donut">Donut</Link>
    </nav>
  )
};

export default SnackItems;