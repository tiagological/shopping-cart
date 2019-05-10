import React from 'react';
import { connect } from 'react-redux';
import { removeItem, decreaseTotal, toggleCart } from '../actions';
import styles from '../styles/Cart.module.css';
import PropTypes from 'prop-types';

const Cart = props => {
  const cartItems = props.cart.map(item => {
    return (
      <div key={item.id}>
        <p>{item.name}</p>
        <p>£{item.price}</p>
        <button
          className='button is-primary'
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
      <div className={styles.emptyCartMessage}>
        <i className='fas fa-2x fa-shopping-cart' />

        <h1>Your cart is empty!</h1>
      </div>
    ) : (
      <div>
        {cartItems}
        <p>Total: £{props.total}</p>
      </div>
    );

  return (
    <div style={cartVisibility} className={styles.cartContainer}>
      <button className={styles.closeBtn} onClick={props.toggleCart}>
        <i className='fas fa-times' />
      </button>
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
  { removeItem, decreaseTotal, toggleCart }
)(Cart);

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
  decreaseTotal: PropTypes.func.isRequired,
  toggleCart: PropTypes.func.isRequired,
  isCartVisible: PropTypes.bool.isRequired
};
