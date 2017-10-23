import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';
import BasicProfile from './BasicProfile';
import LiveGame from './LiveGame';
import { fetchUser } from '../reducers/user';
import postUser from '../util/api';
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
    return (
      <div>
        <BasicProfile user={this.props.user} />
        {
        !this.props.user.id ?
          <div>Loading...</div>
        :
          <LiveGame id={this.props.user.id} />
        }
        Summoner
        {
          !this.props.user ?
            <div>Loading... </div>
          :
            <div>
              ABOVE IS LIVEGAME
              <Filter recentGames={this.props.games} />
            </div>
        }
      </div>
    );
  }
}

Summoner.defaultProps = {
  location: { search: '' },
  user: { accountId: 0, id: 0 },
  games: {},
};

Summoner.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }),
  user: PropTypes.shape({
    id: PropTypes.number,
    accountId: PropTypes.number,
  }),
  games: PropTypes.shape({}),
  fetchUser: PropTypes.func.isRequired,
  fetchChampMastery: PropTypes.func.isRequired,
  fetchRecent: PropTypes.func.isRequired,
  fetchRunePages: PropTypes.func.isRequired,
  fetchMasteryPages: PropTypes.func.isRequired,
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
