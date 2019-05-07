import React from 'react';
import styles from '../styles/Subheading.module.css';

const Subheading = ({ content }) => {
  return (
    <div
      className={`container has-text-centered ${styles.subHeadingContainer}`}>
      <h2 className={styles.subHeading}>{content}</h2>
    </div>
  );
};

export default Subheading;
