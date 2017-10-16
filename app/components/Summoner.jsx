import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUser } from '../reducers/user';

class Summoner extends Component {
  componentDidMount() {
    const { search } = this.props.location;
    const params = new URLSearchParams(search);
    const username = params.get('username');
    this.props.fetchUser(username);
  }
  render() {
    return (
      <div>Summoner</div>
    );
  }
}

Summoner.propTypes = {
  location: PropTypes.shape({ search: PropTypes.string.isRequired }),
  fetchUser: PropTypes.func.isRequired,
};

Summoner.defaultProps = {
  location: { search: '' },
};

const mapStateToProps = ({
  user, recentGames, champMastery, runePages, masteries,
}) => ({
  user, recentGames, champMastery, runePages, masteries,
});

const mapDispatchToProps = { fetchUser };

export default connect(mapStateToProps, mapDispatchToProps)(Summoner);
