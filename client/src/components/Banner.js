import React from 'react';
import styles from '../styles/Banner.module.css';

const Banner = ({ scrollToProducts }) => {
  return (
    <div className={`container ${styles.bannerContainer}`}>
      <h1 className={`title is-1 ${styles.bannerHeading}`}>Feeling healthy?</h1>
      <button
        className={`button is-primary is-large ${styles.callToActionBtn}`}
        onClick={scrollToProducts}>
        DISCOVER
      </button>
    </div>
  );
};

export default Banner;
