import React from 'react';
import { Link } from 'react-router-dom';
import './SnackItems.css';


const SnackItems = () => {
  return (
    <nav className="SnackItems">
      <h1>Vending Machine</h1>
      <Link exact to="/chocolatebar">Chocolate Bar</Link>
      <Link exact to="/skittles">Skittles</Link>
      <Link exact to="/donut">Donut</Link>
    </nav>
  )
};

export default SnackItems;