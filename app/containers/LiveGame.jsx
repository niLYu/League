import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLiveGame } from '../reducers';
import styles from '../styles/LiveGame.css';
import { Heroes } from '../../seed';

class LiveGame extends Component {
  componentDidMount() {
    this.props.fetchLiveGame(this.props.id);
  }

  render() {
    return (
      <div>
        <h2>Live Game</h2>
        <h3 className={styles.center}>{this.props.liveGame.gameMode}Game Mode</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.td}>Player</th>
              <th className={styles.td}>some column</th>
              <th className={styles.td}>some other column</th>
            </tr>
          </thead>
        </table>

        {/* blue team table */}

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.blueTeam}>Blue Team{'   '}{this.props.liveGame.bannedChampions.map((el, index) => {
                if (index < 5 && el.championId > 0) {
                  return (<img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${Heroes[el.championId].key}.png`} alt={Heroes[el.championId].key}className={styles.banSize} />);
                }
                return null;
              })}
              </th>
              <th className={styles.blueTeam}>{'   '}
              </th>
              <th className={styles.blueTeam}>{'   '}
              </th>
            </tr>
          </thead>

          {/* body for blue team table */}

          <tbody>
            {this.props.liveGame.participants &&
        this.props.liveGame.participants.filter(elm => (elm.teamId === 100))
          .map(el => (
            <tr>
              <th className={styles.td}>
                {el.summonerName}
              </th>
              <th className={styles.td}>
                some data
              </th>
              <th className={styles.td}>
                something else
              </th>
            </tr>
            ))}
          </tbody>
        </table>

        {/* red team table */}

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.redTeam}>Red Team{'   '}{this.props.liveGame.bannedChampions.map((el, index) => {
              if (index > 4 && el.championId > 0) {
                return (<img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${Heroes[el.championId].key}.png`} alt={Heroes[el.championId].key}className={styles.banSize} />);
              }
              return null;
            })}
              </th>
              <th className={styles.redTeam}>{'   '}
              </th>
              <th className={styles.redTeam}>{'   '}
              </th>
            </tr>
          </thead>

          {/* body for blue team table */}

          <tbody>
            {this.props.liveGame.participants &&
      this.props.liveGame.participants.filter(elm => (elm.teamId === 100))
        .map(el => (
          <tr>
            <th className={styles.td}>
              {el.summonerName}
            </th>
            <th className={styles.td}>
              some data
            </th>
            <th className={styles.td}>
              something else
            </th>
          </tr>
          ))}
          </tbody>
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
