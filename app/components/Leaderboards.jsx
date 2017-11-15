import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchSoloChallengers } from '../reducers/soloChallengers';
import styles from '../styles/Leaderboards.css';


class Leaderboards extends Component {
  componentDidMount() {
    this.props.fetchSoloChallengers();
  }

  render() {
    return (
      <div className={styles.center}>
        {
          <div>
            <h2 className={styles.header}>Challengers</h2>
            <table className={styles.centerTable}>
              <thead className={styles.greenTable}>
                <tr>
                  <th className={styles.center}>Rank</th>
                  <th className={styles.center}>Player</th>
                  <th className={styles.center}>League</th>
                  <th className={styles.center}>LP</th>
                  <th className={styles.center}>Wins</th>
                </tr>
              </thead>
              <tbody>
                {this.props.soloChallengers.entries &&
                this.props.soloChallengers.entries.map((el, index) => {
                  if (index === 0) {
                    return (
                      <tr>
                        <th className={styles.rankOne}>
                          {`${index + 1}. `}
                        </th>
                        <th className={styles.rankOne}>
                          <NavLink to={`/summoner?username=${el.playerOrTeamName}`}>
                          👑 {el.playerOrTeamName}
                          </NavLink>
                        </th>
                        <th className={styles.rankOne}>
                      Challenger
                        </th>
                        <th className={styles.rankOne}>
                          {el.leaguePoints}
                        </th>
                        <th className={styles.rankOne}>
                          {el.wins}
                        </th>
                      </tr>
                    );
                  }
                  if (index === 1) {
                    return (
                      <tr>
                        <th className={styles.rankTwo}>
                          {`${index + 1}. `}
                        </th>
                        <th className={styles.rankTwo}>
                          <NavLink to={`/summoner?username=${el.playerOrTeamName}`}>
                            {el.playerOrTeamName}
                          </NavLink>
                        </th>
                        <th className={styles.rankTwo}>
                      Challenger
                        </th>
                        <th className={styles.rankTwo}>
                          {el.leaguePoints}
                        </th>
                        <th className={styles.rankTwo}>
                          {el.wins}
                        </th>
                      </tr>
                    );
                  }
                  if (index === 2) {
                    return (
                      <tr>
                        <th className={styles.rankThree}>
                          {`${index + 1}. `}
                        </th>
                        <th className={styles.rankThree}>
                          <NavLink to={`/summoner?username=${el.playerOrTeamName}`}>
                            {el.playerOrTeamName}
                          </NavLink>
                        </th>
                        <th className={styles.rankThree}>
                      Challenger
                        </th>
                        <th className={styles.rankThree}>
                          {el.leaguePoints}
                        </th>
                        <th className={styles.rankThree}>
                          {el.wins}
                        </th>
                      </tr>
                    );
                  }
                    return (
                      <tr>
                        <th className={styles.thLeft}>
                          {`${index + 1}. `}
                        </th>
                        <th className={styles.thLeft}>
                          <NavLink to={`/summoner?username=${el.playerOrTeamName}`}>
                            {el.playerOrTeamName}
                          </NavLink>
                        </th>
                        <th className={styles.thLeft}>
                      Challenger
                        </th>
                        <th className={styles.thLeft}>
                          {el.leaguePoints}
                        </th>
                        <th className={styles.thLeft}>
                          {el.wins}
                        </th>
                      </tr>
                    );
                })
              }
              </tbody>
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
