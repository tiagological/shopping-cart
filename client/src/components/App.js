import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import AboutContainer from './AboutContainer';
import CheckoutContainer from './CheckoutContainer';

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
