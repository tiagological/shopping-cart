import React from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Cart from './Cart';
import '../styles/App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <section className='container'>
        <h1>React Redux Shopping Cart</h1>
        <Cart />
        <ProductList />
      </section>
    </div>
  );
};

export default App;
