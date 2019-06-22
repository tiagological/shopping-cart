import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from '../screens/Home';
import AboutContainer from '../screens/AboutContainer';
import CheckoutContainer from '../screens/CheckoutContainer';

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={AboutContainer} />
          <Route exact path='/checkout' component={CheckoutContainer} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
