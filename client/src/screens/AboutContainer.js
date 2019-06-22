import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Cart from '../components/Cart';
import Footer from '../components/Footer';

const AppContainer = () => {
  return (
    <div className='container'>
      <Navbar />
      <About />
      <Cart />
      <Footer />
    </div>
  );
};
export default AppContainer;
