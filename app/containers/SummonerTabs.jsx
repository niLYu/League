import React, { Component } from 'react';
import update from 'react-addons-update';
import { Summary, Leagues, Champions, ChampionMasteries } from '../components';
import { LiveGame } from './index';
import styles from '../styles/SummonerTabs.css';

const SummaryTab = 'Summary';
const LeaguesTab = 'Leagues';
const ChampionsTab = 'Champions';
const MasteriesTab = 'Masteries';
const LiveTab = 'Live';

class SummonerTabs extends Component {
  constructor() {
    super();
    this.initialState = {
      tabs: {
        [SummaryTab]: false,
        [ChampionsTab]: false,
        [LeaguesTab]: false,
        [MasteriesTab]: false,
        [LiveTab]: false,
      },
    };
    this.state = this.initialState;
  }

  componentWillMount() {
    // sets summarytab state to true without mutating the initialState property
    const newState = update(this.initialState, {
      tabs: { [SummaryTab]: { $set: true } },
    });
    this.setState(newState);
  }

  button = name => (
    <div>
      <button className={styles.tab_button} onClick={() => this.handleClick(name)}>{name}</button>
    </div>
  )

  handleClick = (item) => {
    // sets the state of the clicked tab to true without mutating the initialState property
    const newState = update(this.initialState, {
      tabs: { [item]: { $set: true } },
    });
    this.setState(newState);
  }

  render() {
    const { tabs } = this.state;
    const allTabs = Object.keys(tabs);
    return (
      <div className={styles.summoner_tabs_main_container}>
        <div className={styles.summoner_tabs_container}>
          {allTabs.map(tab => <div key={tab}>{this.button(tab)}</div>)}
        </div>
        <div className={styles.tab_item_container}>
          {tabs[SummaryTab] && <Summary />}
          {tabs[LeaguesTab] && <Leagues />}
          {tabs[ChampionsTab] && <Champions />}
          {tabs[MasteriesTab] && <ChampionMasteries />}
          {tabs[LiveTab] && <LiveGame id={this.props.user.id} />}
        </div>
      </div>
    );
  }
}

export default SummonerTabs;
