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
        <div key={product.id} className={`column ${styles.centeredText}`}>
          <p>{product.name}</p>
          <p>{`Price: £${product.price}`}</p>
          <button
            className='button is-outlined'
            onClick={() => {
              this.props.addToCart(product.id, product.name, product.price);
              this.props.increaseTotal(product.price);
            }}
            disabled={
              this.props.cart.findIndex(item => item.name === product.name) ===
              -1
                ? false
                : true
            }>
            Add to cart
          </button>
        </div>
      );
    });

    return <div className='columns'>{listOfProducts}</div>;
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
