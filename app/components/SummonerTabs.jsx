import React, { Component } from 'react';
import Leagues from './Leagues';
import Champions from './Champions';
import Masteries from './Masteries';
import Runes from './Runes';

class SummonerTabs extends Component {
  constructor() {
    super();
    this.initialState = {
      Leagues: false,
      Champions: false,
      Masteries: false,
      Runes: false,
    };
    this.state = this.initialState;
  }


  button = name => (
    <div>
      <button onClick={() => this.handleClick(name)}>{name}</button>
    </div>
  )

  handleClick = (component) => {
    const newState = Object.assign({}, this.state);
    newState[component] = true;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <div>
          <div>
            {this.button('Leagues')}
            {this.button('Champions')}
            {this.button('Masteries')}
            {this.button('Runes')}
          </div>
        </div>
        <div>
          {this.state.Leagues && <Leagues />}
          {this.state.Champions && <Champions />}
          {this.state.Masteries && <Masteries />}
          {this.state.Runes && <Runes />}
        </div>
      </div>
    );
  }
}

export default SummonerTabs;
