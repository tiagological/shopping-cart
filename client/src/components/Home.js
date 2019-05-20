import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Subheading from './Subheading';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import '../styles/App.css';

const Home = () => {
  const scrollToProducts = () => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  let ref = React.createRef();

  return (
    <div className='container'>
      <Navbar />
      <Banner scrollToProducts={scrollToProducts} />
      <Subheading content='Explore our range of healthy and delicious fruits!' />
      <Cart />
      <ProductList reference={ref} />
      <Footer />
    </div>
  );
};

export default Home;
