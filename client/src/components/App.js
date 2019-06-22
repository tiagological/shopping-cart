import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from '../screens/Home';
import AboutContainer from '../screens/AboutContainer';
import CheckoutContainer from '../screens/CheckoutContainer';
import { baseURL } from '../constants';

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path={baseURL + '/'} component={Home} />
          <Route exact path={baseURL + '/about'} component={AboutContainer} />
          <Route
            exact
            path={baseURL + '/checkout'}
            component={CheckoutContainer}
          />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
