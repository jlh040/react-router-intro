import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import ChocolateBar from './ChocolateBar';

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <BrowserRouter>
        <nav>
          <Route exact path="/">
            <NavLink exact to="/chocolatebar">Chocolate Bar</NavLink>
            <NavLink exact to="/skittles">Skittles</NavLink>
            <NavLink exact to="/snickers">Snickers</NavLink>
          </Route>
        </nav>
        <main>
          <Route exact path="/chocolatebar">
            <ChocolateBar />
          </Route>
          {/* <Route exact path="/skittles">
            <Skittles />
          </Route>
          <Route exact path="/snickers">
            <Snickers />
          </Route> */}
        </main>
      </BrowserRouter>
    </div>
  )
};

export default VendingMachine;