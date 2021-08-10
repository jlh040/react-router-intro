import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SnackItems from './SnackItems';
import ChocolateBar from './ChocolateBar';
import Skittles from './Skittles';
import Donut from './Donut';

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <BrowserRouter>
        <Route exact path="/">
          <SnackItems />
        </Route>
        <Route exact path="/chocolatebar">
          <ChocolateBar />
        </Route>
        <Route exact path="/skittles">
          <Skittles />
        </Route>
        <Route exact path="/donut">
          <Donut />
        </Route>
      </BrowserRouter>
    </div>
  )
};

export default VendingMachine;