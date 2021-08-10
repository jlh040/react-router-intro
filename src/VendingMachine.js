import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const VendingMachine = () => {
  return (
    <div>
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
    </div>
  )
};

export default VendingMachine;