import React from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Cart from './Cart';
import '../styles/App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>React Redux Shopping Cart</h1>
      <Cart />
      <ProductList />
    </div>
  );
};

export default App;
