import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <Link to='/' className='navbar-item'>
          <p className={styles.logoFont}>Tutti Frutti</p>
        </Link>

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
          <Link
            to='/'
            className={`navbar-item ${styles.navbarItem}`}
            onClick={() => classToggler()}>
            <span className='icon is-large'>
              <i className='fas fa-2x fa-home' />
            </span>
            {window.innerWidth < 768 && <p className={styles.text}>HOME</p>}
          </Link>

          <Link
            to='/about'
            className={`navbar-item ${styles.navbarItem}`}
            onClick={() => classToggler()}>
            <span className='icon is-large'>
              <i className='fas fa-2x fa-info-circle' />
            </span>
            {window.innerWidth < 768 && <p className={styles.text}>ABOUT</p>}
          </Link>
          <a
            className={`navbar-item ${styles.navbarItem}`}
            onClick={() => {
              props.toggleCart();
              classToggler();
            }}>
            <span className='icon is-large'>
              <span className={styles.productQuantity}>
                {props.cart.length < 1 ? null : props.cart.length}
              </span>
              <i className='fas fa-2x fa-shopping-cart' />
            </span>
            {window.innerWidth < 768 && <p className={styles.text}>CART</p>}
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
