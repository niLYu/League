import React, { Component } from 'react';
import Summary from './Summary';
import Leagues from './Leagues';
import Champions from './Champions';
import Masteries from './Masteries';
import LiveGame from './LiveGame';
import Runes from './Runes';
import styles from './SummonerTabs.css';

const SummaryTab = 'Summary';
const LeaguesTab = 'Leagues';
const ChampionsTab = 'Champions';
const MasteriesTab = 'Masteries';
const RunesTab = 'Runes';
const LiveTab = 'Live';

class SummonerTabs extends Component {
  constructor() {
    super();
    this.initialState = {
      [SummaryTab]: true,
      [ChampionsTab]: false,
      [LeaguesTab]: false,
      [MasteriesTab]: false,
      [RunesTab]: false,
      [LiveTab]: false,
    };
    this.state = this.initialState;
  }

  button = name => (
    <div>
      <button className={styles.tab_button} onClick={() => this.handleClick(name)}>{name}</button>
    </div>
  )

  handleClick = (component) => {
    const newState = Object.assign({}, this.initialState);
    newState[component] = true;
    this.setState(newState);
  }

  render() {
    const allTabs = Object.keys(this.initialState);
    return (
      <div>
        <div className={styles.summoner_tabs_container}>
          {allTabs.map(tab => <div key={tab}>{this.button(tab)}</div>)}
        </div>
        <div>
          {this.state.Summary && <Summary />}
          {this.state.Leagues && <Leagues />}
          {this.state.Champions && <Champions />}
          {this.state.Masteries && <Masteries />}
          {this.state.Runes && <Runes />}
          {this.state.Live && <LiveGame />}
        </div>
      </div>
    );
  }
}

export default SummonerTabs;
