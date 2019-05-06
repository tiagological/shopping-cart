import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import ProductList from './ProductList';
import Cart from './Cart';
import '../styles/App.css';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Banner />
      <section className='container'>
        <Cart />
        <ProductList />
      </section>
    </div>
  );
};

export default App;
