import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart, increaseTotal } from '../actions';
import PropTypes from 'prop-types';
import styles from '../styles/ProductList.module.css';

class ProductList extends React.Component {
  componentDidMount = () => {
    this.props.fetchProducts();
  };

  render() {
    const listOfProducts = this.props.products.map(product => {
      return (
        <div
          key={product.id}
          className={`column is-one-third-tablet is-one-quarter-desktop ${
            styles.productContainer
          }`}>
          <div className={styles.innerContainer}>
            <div
              className='container'
              style={{
                width: '140px',
                height: '140px'
              }}>
              <img
                src={require(`../assets/${product.id}.jpg`)}
                alt={product.name}
                width='140'
                height='140'
                className={styles.productImg}
              />
            </div>
            <p>{product.name}</p>
            <p>{`£${product.price.toFixed(2)}`}</p>
            <button
              className={`button is-primary ${styles.addToCartBtn}`}
              onClick={() => {
                this.props.addToCart(product.id, product.name, product.price);
                this.props.increaseTotal(product.price);
              }}
              disabled={
                this.props.cart.findIndex(
                  item => item.name === product.name
                ) === -1
                  ? false
                  : true
              }>
              {this.props.cart.findIndex(item => item.name === product.name) ===
              -1
                ? 'Add to cart'
                : 'Added to cart'}
            </button>
          </div>
        </div>
      );
    });

    return (
      <div className='section' ref={this.props.reference}>
        <div className='columns is-mobile is-multiline'>{listOfProducts}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart
  };
};

export default connect(
  mapStateToProps,
  { fetchProducts, addToCart, increaseTotal }
)(ProductList);

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  increaseTotal: PropTypes.func.isRequired
};
