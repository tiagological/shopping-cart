import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Subheading from './Subheading';
import ProductList from './ProductList';
import Cart from './Cart';
import '../styles/App.css';

const Home = () => {
  return (
    <div className='container'>
      <Navbar />
      <Banner />
      <section className='container'>
        <Subheading content='Explore our range of healthy and delicious fruits!' />
        <Cart />
        <ProductList />
      </section>
    </div>
  );
};

export default Home;
