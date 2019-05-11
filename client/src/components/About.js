import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className='container'>
      <section className='hero is-warning is-medium is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title is-size-1'>About us</h1>
          </div>
        </div>
      </section>
      <div className={`container has-text-centered ${styles.aboutContent}`}>
        <p className='is-size-4'>
          We source only the finest organic fruits grown by local farmers and
          are committed to investing in sustainable farming.
          <p className='is-size-4'>
            If for any reason your are unsatisfied with the quality of your
            product, please fill out the form below and we will respond to you
            as soon as possible.
          </p>
        </p>
      </div>
      <div className={`container ${styles.getInTouchTitle}`}>
        <h2 className='title is-2'>Get in touch</h2>
      </div>
      <div className={`container ${styles.formContainer}`}>
        <div className='field'>
          <label className='label is-large'>Name</label>
          <div className='control'>
            <input
              className='input is-large'
              type='text'
              placeholder='Your first and last names'
            />
          </div>
        </div>
        <div className='field'>
          <label className='label is-large'>Email</label>
          <div className='control'>
            <input
              className='input is-large'
              type='email'
              placeholder='Enter your email address'
            />
          </div>
        </div>
        <div className='field'>
          <label className='label is-large'>Message</label>
          <div className='control'>
            <textarea
              className='textarea is-large'
              placeholder='Enter your message'
              rows='5'
            />
          </div>
        </div>
        <div className='field'>
          <div className='control has-text-centered'>
            <button
              className={`button is-primary is-large ${styles.submitBtn}`}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
