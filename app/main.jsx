import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import Home from './components/Home'
import Summoner from './components/Summoner'
import NotFound from './components/NotFound'

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path ='/summoner' component={Summoner} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
)

