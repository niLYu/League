import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SummonerTabs } from './index';
import { BasicProfile } from '../components/index';
import styles from '../styles/LoadingSpinner.css';

// possible because we're exporting from one file
import { fetchUser, fetchRecent, fetchProfile, fetchChampMastery, fetchInitialState } from '../reducers';

class Summoner extends Component {
  componentDidMount() {
    this.props.getAllUserInfo(this.props.location);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      this.props.getAllUserInfo(nextProps.location);
    }
  }

  render() {
    return (
      <div>
        {this.props.games.length === 0
        ?
          <div className={styles.loader} />
        :
          <div>
            <BasicProfile />
            <SummonerTabs {...this.props} />
          </div>
        }
      </div>
    );
  }
}

Summoner.defaultProps = {
  location: { search: '' },
  user: { accountId: 0, id: 0 },
  games: [],
};

Summoner.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }),
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    accountId: PropTypes.number.isRequired,
  }),
  games: PropTypes.arrayOf(PropTypes.object.isRequired),
  getAllUserInfo: PropTypes.func.isRequired,
};


const mapStateToProps = ({
  user, games, championMastery, masteryPages, runePages, matchInfo, profile,
}) => ({
  user, games, championMastery, masteryPages, runePages, matchInfo, profile,
});

const mapDispatchToProps = dispatch => ({
  getAllUserInfo: (location) => {
    let user;
    const { search } = location;
    const params = new URLSearchParams(search);
    const username = params.get('username');
    Promise.resolve(dispatch(fetchInitialState()))
      .then(() => dispatch(fetchUser(username))
        .then((action) => {
          // eslint-disable-next-line prefer-destructuring
          user = action.user;
          return Promise.all([dispatch(fetchProfile(+user.id)), dispatch(fetchRecent(+user.accountId))]);
        })
        .then(() => dispatch(fetchChampMastery(+user.id)))
        .catch(err => console.error(err)));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Summoner);
