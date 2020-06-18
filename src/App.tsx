import React from 'react'
import Home from './Components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Subscribe from './Components/Subscribe'

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/subscribe' exact component={Subscribe} />
        </Switch>
      </Router>
    )
  }
}

export default App
