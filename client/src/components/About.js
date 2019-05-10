import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div class='container'>
      <section class='hero is-warning is-medium is-bold'>
        <div class='hero-body'>
          <div class='container'>
            <h1 class='title'>About us</h1>
          </div>
        </div>
      </section>
      <div className='container'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          lectus ac ex viverra dapibus id eget tortor. Nullam efficitur lacus
          non sem interdum, sit amet scelerisque sapien interdum. Vestibulum
          convallis arcu nec purus dictum fermentum facilisis non sem. Mauris
          bibendum turpis sodales, dignissim augue ac, pulvinar libero. Donec
          risus sem, consequat ut neque vitae, condimentum scelerisque elit.
          Nunc auctor sapien in ante molestie, a egestas eros vulputate. Integer
          ut iaculis urna. Cras ac est vel nunc iaculis suscipit nec a tellus.
          Quisque vel eros bibendum, dignissim ante et, eleifend justo. Morbi et
          pulvinar arcu, quis egestas urna. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Nulla
          lacinia justo sit amet ipsum luctus imperdiet. Donec venenatis, arcu
          quis tempus elementum, mauris mi tempor diam, ac suscipit odio nulla
          blandit nisl. Pellentesque lobortis augue est, ut scelerisque metus
          tempus eu. Sed vitae ante lectus.
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
