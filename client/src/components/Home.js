import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Subheading from './Subheading';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import '../styles/App.css';

const Home = () => {
  return (
    <div className='container'>
      <Navbar />
      <Banner />
      <Subheading content='Explore our range of healthy and delicious fruits!' />
      <Cart />
      <ProductList />

      <Footer />
    </div>
  );
};

export default Home;
