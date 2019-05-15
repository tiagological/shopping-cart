import React, { createRef } from 'react';
import styles from '../styles/About.module.css';

class About extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    successMessageVisible: false
  };

  ref = createRef();

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  };

  handleSubmit = e => {
    console.log(window.innerWidth);
    e.preventDefault();
    setTimeout(() => {
      this.setState(
        {
          successMessageVisible: true
        },
        () => {
          this.resetForm();
          window.scrollTo({
            top:
              this.ref.current.offsetTop +
              (window.innerWidth >= 1024 ? 200 : 400),
            behavior: 'smooth'
          });
        }
      );
    }, 2000);
    setTimeout(
      () =>
        this.setState({
          successMessageVisible: false
        }),
      7000
    );
  };

  render() {
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
          </p>
          <p className='is-size-4'>
            If for any reason your are unsatisfied with the quality of your
            product, please fill out the form below and we will respond to you
            as soon as possible.
          </p>
          <hr />
        </div>
        <div className={`container ${styles.getInTouchTitle}`}>
          <h2 className='title is-2'>Get in touch</h2>
          <article
            className={`message is-success ${
              styles.formSubmitMessageContainer
            }`}
            style={
              this.state.successMessageVisible
                ? { display: 'block' }
                : { display: 'none' }
            }>
            <div className='message-body' ref={this.ref}>
              Thank you for contacting us. We will get back to you as soon as
              possible.
            </div>
          </article>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className={`container ${styles.formContainer}`}>
            <div className='field'>
              <label className='label is-large'>Name</label>
              <div className='control'>
                <input
                  onChange={this.handleChange}
                  className='input is-large'
                  type='text'
                  placeholder='Your first and last names'
                  name='name'
                  value={this.state.name}
                  required
                />
              </div>
            </div>
            <div className='field'>
              <label className='label is-large'>Email</label>
              <div className='control'>
                <input
                  onChange={this.handleChange}
                  className='input is-large'
                  type='email'
                  placeholder='Enter your email address'
                  value={this.state.email}
                  name='email'
                  required
                />
              </div>
            </div>
            <div className='field'>
              <label className='label is-large'>Message</label>
              <div className='control'>
                <textarea
                  onChange={this.handleChange}
                  className='textarea is-large'
                  rows='5'
                  placeholder='Enter your message'
                  value={this.state.message}
                  name='message'
                  required
                />
              </div>
            </div>
            <div className='field'>
              <div className='control has-text-centered'>
                <input
                  className={`button is-primary is-large ${styles.submitBtn}`}
                  type='submit'
                  value='Submit'
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default About;
