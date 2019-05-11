import React from 'react';
import { connect } from 'react-redux';
import { removeItem, decreaseTotal } from '../actions';
import styles from '../styles/Checkout.module.css';

const Checkout = props => {
  const checkoutDisplay =
    props.cart.length === 0 ? (
      <div className={styles.emptyCartMessage}>
        <i className='fas fa-2x fa-shopping-cart' />

        <h1>Your cart is empty!</h1>
      </div>
    ) : (
      props.cart.map(item => {
        return (
          <div key={item.id} className='container'>
            <p>{item.name}</p>
            <p>£{item.price}</p>
            <button
              className='button is-primary is-medium'
              onClick={() => {
                props.removeItem(item.id);
                props.decreaseTotal(item.price);
              }}>
              Remove from cart
            </button>
          </div>
        );
      })
    );

  return (
    <div className={`container has-text-centered ${styles.checkoutContent}`}>
      <h1 className='is-size-1'>Checkout</h1>
      {checkoutDisplay}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    total: state.total
  };
};

export default connect(
  mapStateToProps,
  { removeItem, decreaseTotal }
)(Checkout);
