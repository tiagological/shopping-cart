import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Subheading from '../components/Subheading';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
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
