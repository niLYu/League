import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLiveGame } from '../reducers';
import styles from '../styles/LiveGame.css';
import LiveGameTeam from '../components/LiveGameTeam';

class LiveGame extends Component {
  componentDidMount() {
    this.props.fetchLiveGame(this.props.id);
  }

  render() {
    return (
      <div className={styles.container}>
        <h2>Live Game</h2>
        <h3 className={styles.center}>{this.props.liveGame.gameMode} Mode</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.td}>Player</th>
              <th className={styles.td}>Season 7 Solo</th>
              <th className={styles.td}>Season 7 Flex</th>
              <th className={styles.td}>Ranked Win Ratio</th>
            </tr>
          </thead>
        </table>

        <LiveGameTeam color="blue" team={this.props.liveGame} />
        <LiveGameTeam color="red" team={this.props.liveGame} />
      </div>
    );
  }
}

LiveGame.defaultProps = {
  liveGame: {
    bannedChampions: [],
    gameMode: '',
  },
};
LiveGame.propTypes = {
  fetchLiveGame: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  liveGame: PropTypes.shape({
    bannedChampions: PropTypes.arrayOf(PropTypes.object.isRequired),
    gameMode: PropTypes.string.isRequired,
    participants: PropTypes.arrayOf(PropTypes.object.isRequired),
  }),
};


const mapStateToProps = ({ liveGame }) => ({ liveGame });

const mapDispatchToProps = { fetchLiveGame };

export default connect(mapStateToProps, mapDispatchToProps)(LiveGame);

