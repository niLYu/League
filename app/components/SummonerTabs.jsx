import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'react-addons-update';
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
        [SummaryTab]: false,
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
    const newState = update(this.initialState, {
      tabs: { [SummaryTab]: { $set: true } },
    });
    this.setState(newState);
    if (window.screen.width < 600) {
      this.setState({ desktop: false });
    }
  }

  button = name => (
    <div>
      <button className={styles.tab_button} onClick={() => this.handleClick(name)}>{name}</button>
    </div>
  )

  handleClick = (item) => {
    const newState = update(this.initialState, {
      tabs: { [item]: { $set: true } },
    });
    if (window.screen.width < 600) {
      newState.desktop = false;
    }
    this.setState(newState);
  }

  render() {
    const { tabs } = this.state;
    const allTabs = Object.keys(tabs);
    return (
      <div className={styles.summoner_tabs_main_container}>
        {this.state.desktop ?
          <div className={styles.summoner_tabs_container}>
            {allTabs.map(tab => <div key={tab}>{this.button(tab)}</div>)}
          </div>
        : <SummonerTabsMobile tabs={tabs} handleClick={this.handleClick} />
        }
        <div className={styles.tab_item_container}>
          {tabs[SummaryTab] && <Summary games={this.props.games} />}
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

SummonerTabs.propTypes = {
  games: PropTypes.shape({
    matches: PropTypes.array.isRequired,
  }),
};

SummonerTabs.defaultProps = {
  games: {},
};

export default SummonerTabs;
