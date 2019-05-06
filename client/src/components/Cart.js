import React from 'react';
import { connect } from 'react-redux';
import { removeItem, decreaseTotal } from '../actions';
import styles from '../styles/Cart.module.css';
import PropTypes from 'prop-types';

const Cart = props => {
  const cartItems = props.cart.map(item => {
    return (
      <div key={item.id}>
        <p>{item.name}</p>
        <p>£{item.price}</p>
        <button
          onClick={() => {
            props.removeItem(item.id);
            props.decreaseTotal(item.price);
          }}>
          Remove from cart
        </button>
      </div>
    );
  });

  const cartVisibility = props.isCartVisible
    ? { visibility: 'visible', opacity: 1 }
    : { visibility: 'hidden', opacity: 0 };

  const cartDisplay =
    props.cart.length === 0 ? (
      <div>Your cart is empty!</div>
    ) : (
      <div>
        {cartItems}
        <p>Total: £{props.total}</p>
      </div>
    );

  return (
    <div style={cartVisibility} className={styles.cartContainer}>
      <h3>Cart</h3>
      {cartDisplay}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    total: state.total,
    isCartVisible: state.isCartVisible
  };
};

export default connect(
  mapStateToProps,
  { removeItem, decreaseTotal }
)(Cart);

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
  decreaseTotal: PropTypes.func.isRequired,
  isCartVisible: PropTypes.bool.isRequired
};
