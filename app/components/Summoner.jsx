import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';
import { fetchUser, postUser } from '../reducers/user';
import { fetchRecent } from '../reducers/games';
import { fetchChampMastery } from '../reducers/championMastery';
import { fetchMasteryPages } from '../reducers/masteryPages';
import { fetchRunePages } from '../reducers/runePages';

class Summoner extends Component {
  componentDidMount() {
    const { search } = this.props.location;
    const params = new URLSearchParams(search);
    const username = params.get('username');
    this.props.fetchUser(username)
      .then(() => {
        this.props.fetchRecent(this.props.user.accountId);
      })
      .then(() => {
        this.props.fetchChampMastery(this.props.user.id);
      })
      .then(() => {
        this.props.fetchMasteryPages(this.props.user.id);
      })
      .then(() => {
        this.props.fetchRunePages(this.props.user.id);
      })
      .then(() => {
        postUser(this.props.user);
      })
      .catch(err => console.error(err));
  }
  render() {
    // console.log(this.props, 'props');
    return (
      <div>
        Summoner
        {
          !this.props.user ?
            <div>Loading... </div>
            :
            <Filter recentGames={this.props.games} />
        }
      </div>
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
  user, games, championMastery, masteryPages, runePages,
}) => ({
  user, games, championMastery, masteryPages, runePages,
});

const mapDispatchToProps = {
  fetchUser, fetchRecent, fetchChampMastery, fetchMasteryPages, fetchRunePages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Summoner);
