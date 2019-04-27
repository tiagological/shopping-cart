import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  return (
    <div>
      <h1>React Redux Shopping Cart</h1>
      <Cart />
      <ProductList />
    </div>
  );
};

export default App;
