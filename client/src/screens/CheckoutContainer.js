import React from 'react';
import CheckoutNavbar from '../components/CheckoutNavbar';
import Checkout from '../components/Checkout';
import Footer from '../components/Footer';
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
