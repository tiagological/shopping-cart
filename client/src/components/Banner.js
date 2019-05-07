import React from 'react';
import styles from '../styles/Banner.module.css';

const Banner = () => {
  return (
    <div className={`container ${styles.bannerContainer}`}>
      <h1 className={`title is-1 ${styles.bannerHeading}`}>Feeling healthy?</h1>
      <a className={`button is-primary is-large ${styles.callToActionBtn}`}>
        DISCOVER
      </a>
    </div>
  );
};

export default Banner;
