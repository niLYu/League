import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';
import BasicProfile from './BasicProfile';
import LiveGame from './LiveGame';

// possible because we're exporting from one file
import { ChampionMasteries } from './index';
import { fetchUser, fetchRecent, fetchChampMastery, fetchMasteryPages, fetchRunePages } from '../reducers';

class Summoner extends Component {
  componentDidMount() {
    this.props.getAllUserInfo(this.props.location);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.props.getAllUserInfo(this.props.location);
    }
  }

  render() {
    return (
      <div>
        <BasicProfile user={this.props.user} />
        <ChampionMasteries />
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
  getAllUserInfo: PropTypes.func.isRequired,
};


const mapStateToProps = ({
  user, games, championMastery, masteryPages, runePages,
}) => ({
  user, games, championMastery, masteryPages, runePages,
});

const mapDispatchToProps = dispatch => ({
  getAllUserInfo: (location) => {
    let user;
    const { search } = location;
    const params = new URLSearchParams(search);
    const username = params.get('username');
    dispatch(fetchUser(username))
      .then((action) => {
        user = action.user;
        dispatch(fetchRecent(+user.accountId));
      })
      .then(() => dispatch(fetchChampMastery(+user.id)))
      .then(() => dispatch(fetchMasteryPages(+user.id)))
      .then(() => dispatch(fetchRunePages(+user.id)))
      .catch(err => console.error(err));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Summoner);
