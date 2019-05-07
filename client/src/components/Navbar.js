import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleCart } from '../actions';
import styles from '../styles/Navbar.module.css';

const Navbar = props => {
  const [expandedState, setExpandedState] = useState('not-active');

  const classToggler = () => {
    expandedState === 'not-active'
      ? setExpandedState('is-active')
      : setExpandedState('not-active');
  };

  return (
    <nav
      className={`navbar is-fixed-top ${styles.navbar}`}
      role='navigation'
      aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='#'>
          <p className={styles.logoFont}>Tutti Frutti</p>
        </a>

        <a
          role='button'
          className={`navbar-burger burger ${expandedState}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarMenu'
          onClick={classToggler}>
          <span aria-hidden='true' className={styles.burgerSpan} />
          <span aria-hidden='true' className={styles.burgerSpan} />
          <span aria-hidden='true' className={styles.burgerSpan} />
        </a>
      </div>

      <div
        id='navbarMenu'
        className={`navbar-menu ${expandedState} ${styles.navbarMenu}`}>
        <div className='navbar-end'>
          <a className='navbar-item'>
            <span className='icon is-large'>
              <i className='fas fa-2x fa-home' />
            </span>
          </a>

          <a className='navbar-item'>
            <span className='icon is-large'>
              <i className='fas fa-2x fa-info-circle' />
            </span>
          </a>

          <a className='navbar-item' onClick={props.toggleCart}>
            <span className='icon is-large'>
              <span className={styles.productQuantity}>
                {props.cart.length < 1 ? null : props.cart.length}
              </span>
              <i className='fas fa-2x fa-shopping-cart' />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return { cart: state.cart };
};

export default connect(
  mapStateToProps,
  { toggleCart }
)(Navbar);
