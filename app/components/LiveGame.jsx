import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLiveGame } from '../reducers';
import styles from './LiveGame.css';


class LiveGame extends Component {
  componentDidMount() {
    this.props.fetchLiveGame(this.props.id);
  }

  render() {
    console.log(this.props.liveGame, 'live game props');
    return (
      <div>
        <h2>Live Game</h2>
        <h3>{this.props.liveGame.gameMode}</h3>
        <table className={styles.table}>
          <tbody>
            <tr>
              {/* <th className={styles.rank}>Rank</th> */}
              <th className={styles.td}>Player</th>
              <th className={styles.td}>some column</th>
              <th className={styles.td}>some other column</th>
            </tr>
          </tbody>
        </table>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th className={styles.td}>Blue Team</th>
            </tr>
          </tbody>
          {this.props.liveGame.participants &&
        this.props.liveGame.participants.filter(elm => (elm.teamId === 100))
          .map(el => (
            <tbody key={el.summonerId}>
              <tr>
                <td className={styles.td}>
                  {el.summonerName}
                </td>
              </tr>
            </tbody>
            ))}
        </table>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th className={styles.td}>Red Team</th>
            </tr>
          </tbody>
          {this.props.liveGame.participants &&
        this.props.liveGame.participants.filter(elm => (elm.teamId === 200))
          .map(el => (
            <tbody key={el.summonerId}>
              <tr>
                <td className={styles.td}>
                  {el.summonerName}
                </td>
              </tr>
            </tbody>
            ))}
        </table>
      </div>
    );
  }
}
LiveGame.propTypes = {
  fetchLiveGame: PropTypes.func.isRequired,
};


const mapStateToProps = ({ liveGame }) => ({ liveGame });

const mapDispatchToProps = { fetchLiveGame };

export default connect(mapStateToProps, mapDispatchToProps)(LiveGame);
