import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart, increaseTotal } from '../actions';

class ProductList extends React.Component {
  componentDidMount = () => {
    this.props.fetchProducts();
  };

  render() {
    const listOfProducts = this.props.products.map(product => {
      return (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{`Price: £${product.price}`}</p>
          <button
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

    return <div>{listOfProducts}</div>;
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
