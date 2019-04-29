import React, { useState } from 'react';

const Navbar = () => {
  const [expandedState, setExpandedState] = useState('not-active');

  const classToggler = () => {
    expandedState === 'not-active'
      ? setExpandedState('is-active')
      : setExpandedState('not-active');
  };

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='#'>
          <p>Shopping Cart</p>
        </a>

        <a
          role='button'
          className={`navbar-burger burger ${expandedState}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarMenu'
          onClick={classToggler}>
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </a>
      </div>

      <div id='navbarMenu' className={`navbar-menu ${expandedState}`}>
        <div className='navbar-end'>
          <a className='navbar-item'>Home</a>

          <a className='navbar-item'>About</a>

          <a className='navbar-item'>Checkout</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
