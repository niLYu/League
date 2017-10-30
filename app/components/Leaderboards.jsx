import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchSoloChallengers } from '../reducers/soloChallengers';
import styles from './Leaderboards.css';


class Leaderboards extends Component {
  componentDidMount() {
    this.props.fetchSoloChallengers();
  }

  render() {
    return (
      <div className={styles.center}>
        {
          <div>
            <h2>Challengers</h2>
            <table className={styles.table}>
              <tr>
                <th className={styles.rank}>Rank</th>
                <th className={styles.td}>Player</th>
                <th className={styles.td}>LP</th>
                <th className={styles.td}>Wins</th>
              </tr>
            </table>
            <table className={styles.table}>
              {this.props.soloChallengers.entries &&
                this.props.soloChallengers.entries.map((el, index) => (
                  <tr>
                    <th className={styles.rank}>
                      {`${index + 1}. `}
                    </th>
                    <td className={styles.td}>
                      <NavLink to={`/summoner?username=${el.playerOrTeamName}`}>
                        {el.playerOrTeamName}
                      </NavLink>
                    </td>
                    <td className={styles.td}>
                      {el.leaguePoints}
                    </td>
                    <td className={styles.td}>
                      {el.wins}
                    </td>
                  </tr>
                ))
              }
            </table>
          </div>
        }

      </div>
    );
  }
}

Leaderboards.defaultProps = {
  soloChallengers: { entries: [] },
};
Leaderboards.propTypes = {
  fetchSoloChallengers: PropTypes.func.isRequired,
};
Leaderboards.propTypes = {
  soloChallengers: PropTypes.shape({
    entries: PropTypes.array.isRequired,
  }),
};

const mapStateToProps = ({ soloChallengers }) => ({ soloChallengers });

const mapDispatchToProps = { fetchSoloChallengers };

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboards);
