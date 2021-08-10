import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ChocolateBar from './ChocolateBar';

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <BrowserRouter>
        <nav>
          <Link to="/chocolatebar">Chocolate Bar</Link>
          <Link to="/skittles">Skittles</Link>
          <Link to="/snickers">Snickers</Link>
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