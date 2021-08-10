import React from 'react';
import { Link } from 'react-router-dom';
import vendingMachine from './vendingMachine.jpeg';
import './SnackItems.css';

const SnackItems = () => {
  return (
    <nav className="SnackItems">
      <h1>Vending Machine</h1>
      <Link to="/chocolatebar">Chocolate Bar</Link>
      <Link to="/skittles">Skittles</Link>
      <Link to="/donut">Donut</Link>
      <img src={vendingMachine} alt="vending machine in the dark" />
    </nav>
  )
};

export default SnackItems;