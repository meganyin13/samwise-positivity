import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Subscribe from './Components/Subscribe';
import Blog from './Components/Blog';

export default (): React.ReactElement => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/subscribe" exact component={Subscribe} />
      <Route path="/blog" exact component={Blog} />
    </Switch>
  </Router>
);
