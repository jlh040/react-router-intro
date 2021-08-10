import React from 'react';
import { Link } from 'react-router-dom';
import chocolateBar from './chocolateBar.jpeg';

const ChocolateBar = () => {
  return (
    <div>
      <h2>Chocolate Time!!</h2>
      <img src={chocolateBar} alt="picture of chocolate bar"/>
      <Link exact path="/">Go Back</Link>
    </div>
  )
};

export default ChocolateBar;