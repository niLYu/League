import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchSoloChallengers } from '../reducers/soloChallengers';


class Leaderboards extends Component {
  componentDidMount() {
    this.props.fetchSoloChallengers();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {
          this.props.soloChallengers.entries &&
          this.props.soloChallengers.entries.map(el => (
            <div key={Number(el.playerOrTeamId)}>
              Name:
          <NavLink to={`/summoner?username=${el.playerOrTeamName}`}>
            {el.playerOrTeamName}
          </NavLink>
              LP: {el.leaguePoints}
              Wins: {el.wins}
            </div>))
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
