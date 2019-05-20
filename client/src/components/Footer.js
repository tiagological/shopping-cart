import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={`footer ${styles.footer}`}>
      <div className='content has-text-centered'>
        <p>Copyright &copy; Tutti Frutti 2019</p>
      </div>
    </footer>
  );
};

export default Footer;
