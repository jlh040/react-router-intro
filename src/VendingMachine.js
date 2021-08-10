import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <nav>
        <Link to="/chocolatebar">Chocolate Bar</Link>
        <Link to="/skittles">Skittles</Link>
        <Link to="/snickers">Snickers</Link>
      </nav>
      <main>
        <BrowserRouter>
          <Route exact path="/chocolatebar">
            <ChocolateBar />
          </Route>
          <Route exact path="/skittles">
            <Skittles />
          </Route>
          <Route exact path="/snickers">
            <Snickers />
          </Route>
        </BrowserRouter>
      </main>
    </div>
  )
};

export default VendingMachine;