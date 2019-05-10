import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import AboutContainer from './AboutContainer';
import Checkout from './Checkout';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={AboutContainer} />
        <Route exact path='/checkout' component={Checkout} />
      </Switch>
    </Router>
  );
};

export default App;
