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
      <div className='container'>
        {props.cart.map(item => {
          return (
            <div
              key={item.id}
              className={`container ${styles.productContainer}`}>
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
                  className={styles.productImg}
                />
                <button
                  className={
                    window.screen.width > 1024
                      ? `button is-primary is-medium ${styles.removeBtn}`
                      : `button is-primary is-small ${styles.removeBtn}`
                  }
                  onClick={() => {
                    props.removeItem(item.id);
                    props.decreaseTotal(item.price);
                  }}>
                  Remove from cart
                </button>
              </div>
            </div>
          );
        })}
        <div className={styles.totalAmountDiv}>
          <div className={styles.totalAmountContent}>
            <p>Total: {props.total.toFixed(2)}</p>
          </div>
          <div className={styles.paymentBtnDiv}>
            <button
              className={
                window.screen.width > 1024
                  ? `button is-medium ${styles.paymentBtn}`
                  : `button is-medium ${styles.paymentBtn}`
              }>
              Go to payment
            </button>
          </div>
        </div>
      </div>
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
