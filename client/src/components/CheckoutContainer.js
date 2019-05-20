import React from 'react';
import CheckoutNavbar from './CheckoutNavbar';
import Checkout from './Checkout';
import Footer from './Footer';
import styles from '../styles/CheckoutContainer.module.css';

const CheckoutContainer = () => {
  return (
    <div className={`container ${styles.checkoutContainer}`}>
      <CheckoutNavbar />
      <Checkout />
      <Footer />
    </div>
  );
};

export default CheckoutContainer;
