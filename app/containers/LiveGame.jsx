import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLiveGame } from '../reducers';
import styles from '../styles/LiveGame.css';
import LiveGameRed from '../components/LiveGameRed';
import LiveGameBlue from '../components/LiveGameBlue';

class LiveGame extends Component {
  componentDidMount() {
    this.props.fetchLiveGame(this.props.id);
  }

  render() {
    console.log(this.props.liveGame);
    return (
      <div className={styles.container}>
        <h2>Live Game</h2>
        <h3 className={styles.center}>{this.props.liveGame.gameMode} Mode</h3>
        <LiveGameBlue team={this.props.liveGame} />
        <LiveGameRed team={this.props.liveGame} />
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

