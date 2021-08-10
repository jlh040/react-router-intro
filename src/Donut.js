import React from 'react';
import { Link } from 'react-router-dom';
import donut from './donut.jpeg';

const Donut = () => {
  return (
    <div>
      <h1>Time to eat a donut!!!</h1>
      <img src={donut} alt="donut on table" />
      <Link to="/">Go Back</Link>
    </div>
  )
};

export default Donut;