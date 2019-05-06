import React from 'react';
import styles from '../styles/Banner.module.css';

const Banner = () => {
  return (
    <div className={`container ${styles.bannerContainer}`}>
      <h1 className={`title is-1 ${styles.bannerHeading}`}>Feeling healthy?</h1>
    </div>
  );
};

export default Banner;
