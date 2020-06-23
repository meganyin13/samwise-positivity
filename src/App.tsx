import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Subscribe from './Components/Subscribe';

export default (): React.ReactElement => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/subscribe" exact component={Subscribe} />
      <Route path="/Blog" exact component={Blog} />
    </Switch>
  </Router>
);
