import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Subscribe from './Components/Subscribe';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/subscribe" exact component={Subscribe} />
          <Route path="/Blog" exact component={Blog} />
        </Switch>
      </Router>
    );
  }
}

export default App;
