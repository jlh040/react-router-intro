import React from 'react';
import { Link } from 'react-router-dom';
import skittles from './skittles.jpeg';

const Skittles = () => {
  return (
    <div>
      <h2>Time to eat some skittles!</h2>
      <img src={skittles} alt="bag of skittles" />
      <Link to="/">Go Back</Link>
    </div>
  )
};

export default Skittles;