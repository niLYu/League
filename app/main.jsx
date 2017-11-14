import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import store from './store';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Summoner from './components/Summoner';
import NotFound from './components/NotFound';
import Leaderboards from './components/Leaderboards';

render(
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/summoner" component={Summoner} />
          <Route path="/challengers" component={Leaderboards} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app'),
);

