import React from 'react';
import CheckoutNavbar from './CheckoutNavbar';
import Checkout from './Checkout';
import Footer from './Footer';

const CheckoutContainer = () => {
  return (
    <div className='container'>
      <CheckoutNavbar />
      <Checkout />
      <Footer />
    </div>
  );
};

export default CheckoutContainer;
