import React, { Component } from 'react';
import { connect } from 'react-redux';

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
  location: React.propType.shape({ search: React.propType.string.isRequired }),
  fetchUser: React.propType.func.isRequired,
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
