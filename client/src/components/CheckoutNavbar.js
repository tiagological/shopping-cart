import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { baseURL } from '../constants';

const CheckoutNavbar = () => {
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
        <Link to={baseURL + '/'} className='navbar-item'>
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
          <Link to={baseURL + '/'} className='navbar-item'>
            <span className='icon is-large'>
              <i className='fas fa-2x fa-home' />
            </span>
          </Link>

          <Link to={baseURL + '/about'} className='navbar-item'>
            <span className='icon is-large'>
              <i className='fas fa-2x fa-info-circle' />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CheckoutNavbar;
