import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import ChocolateBar from './ChocolateBar';
import Skittles from './Skittles';

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <BrowserRouter>
        <Route exact path="/">
          <nav>
            <NavLink exact to="/chocolatebar">Chocolate Bar</NavLink>
            <NavLink exact to="/skittles">Skittles</NavLink>
            <NavLink exact to="/snickers">Snickers</NavLink>
          </nav>
        </Route>
        <Route exact path="/chocolatebar">
          <ChocolateBar />
        </Route>
        <Route exact path="/skittles">
          <Skittles />
        </Route>
        {/* <Route exact path="/snickers">
          <Snickers />
        </Route> */}
      </BrowserRouter>
    </div>
  )
};

export default VendingMachine;