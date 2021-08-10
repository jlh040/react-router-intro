import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import ChocolateBar from './ChocolateBar';
import Skittles from './Skittles';
import Donut from './Donut';

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <BrowserRouter>
        <Route exact path="/">
          <nav>
            <NavLink exact to="/chocolatebar">Chocolate Bar</NavLink>
            <NavLink exact to="/skittles">Skittles</NavLink>
            <NavLink exact to="/donut">Donut</NavLink>
          </nav>
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