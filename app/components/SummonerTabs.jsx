import React, { Component } from 'react';
import Summary from './Summary';
import Leagues from './Leagues';
import Champions from './Champions';
import Masteries from './Masteries';
import LiveGame from './LiveGame';
import Runes from './Runes';
import SummonerTabsMobile from './SummonerTabsMobile';
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
      tabs: {
        [SummaryTab]: true,
        [ChampionsTab]: false,
        [LeaguesTab]: false,
        [MasteriesTab]: false,
        [RunesTab]: false,
        [LiveTab]: false,
      },
      desktop: true,
    };
    this.state = this.initialState;
  }

  componentWillMount() {
    if (window.screen.width < 600) {
      this.setState({ desktop: false });
    }
  }

  button = name => (
    <div>
      <button className={styles.tab_button} onClick={component => this.handleClick(component)}>{name}</button>
    </div>
  )

  handleClick = (item) => {
    const newState = JSON.parse(JSON.stringify(this.initialState));
    if (window.screen.width < 600) {
      newState.desktop = false;
    }
    newState.tabs[item] = true;
    this.setState(newState);
  }

  render() {
    const { tabs } = this.state;
    const allTabs = Object.keys(tabs);
    return (
      <div>
        {this.state.desktop ?
          <div className={styles.summoner_tabs_container}>
            {allTabs.map(tab => <div key={tab}>{this.button(tab)}</div>)}
          </div>
        : <SummonerTabsMobile tabs={tabs} handleClick={this.handleClick} />
        }
        <div>
          {tabs[SummaryTab] && <Summary />}
          {tabs[LeaguesTab] && <Leagues />}
          {tabs[ChampionsTab] && <Champions />}
          {tabs[MasteriesTab] && <Masteries />}
          {tabs[RunesTab] && <Runes />}
          {tabs[LiveTab] && <LiveGame />}
        </div>
      </div>
    );
  }
}

export default SummonerTabs;
