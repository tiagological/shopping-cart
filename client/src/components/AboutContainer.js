import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Cart from './Cart';
import Footer from './Footer';

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
