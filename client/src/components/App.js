import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Checkout from './Checkout';

const App = () => {
  return (
    <Router>
      <Switch>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/checkout' component={Checkout} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
