import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, decreaseTotal, toggleCart } from '../actions';
import styles from '../styles/Cart.module.css';
import PropTypes from 'prop-types';
import 'animate.css';
import { baseURL } from '../constants';

const Cart = props => {
  const cartItems = props.cart.map(item => {
    return (
      <div
        key={item.id}
        className={styles.productContainer}
        style={
          props.cart.indexOf(item) === props.cart.length - 1
            ? { borderBottom: 'none' }
            : null
        }>
        <div className={styles.leftContent}>
          <p>{item.name}</p>
          <p>£{item.price.toFixed(2)}</p>
        </div>
        <div className={styles.rightContent}>
          <img
            src={require(`../assets/${item.id}.jpg`)}
            alt={item.name}
            width='70'
            height='70'
          />
          <button
            className='button is-primary is-small'
            onClick={() => {
              props.removeItem(item.id);
              props.decreaseTotal(item.price);
            }}>
            Remove from cart
          </button>
        </div>
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
      <div className={styles.innerContainer}>
        {cartItems}
        <p style={{ marginBottom: '1rem' }}>Total: £{props.total.toFixed(2)}</p>
        <Link to={baseURL + '/checkout'}>
          <button
            className='button is-primary is-medium'
            onClick={props.toggleCart}>
            Go to checkout
          </button>
        </Link>
      </div>
    );

  return (
    <div
      className={styles.cartBackground}
      style={
        props.isCartVisible
          ? { visiblity: 'visible' }
          : { visibility: 'hidden' }
      }>
      <div
        style={cartVisibility}
        className={styles.cartContainer}
        id='cartContainer'>
        <div className={styles.header} style={{ height: '30px' }}>
          <span className='is-size-4'>Cart</span>
          <button className={styles.closeBtn} onClick={props.toggleCart}>
            <i className='fas fa-times' />
          </button>
        </div>
        <div>{cartDisplay}</div>
      </div>
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
