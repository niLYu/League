import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BasicProfile, SummonerTabs } from './index';
import styles from '../styles/LoadingSpinner.css';

// possible because we're exporting from one file
import { fetchUser, fetchRecent, fetchChampMastery } from '../reducers';

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
            {this.props.user.id && <BasicProfile user={this.props.user} />}
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
  user, games, championMastery, masteryPages, runePages, matchInfo,
}) => ({
  user, games, championMastery, masteryPages, runePages, matchInfo,
});

const mapDispatchToProps = dispatch => ({
  getAllUserInfo: (location) => {
    let user;
    const { search } = location;
    const params = new URLSearchParams(search);
    const username = params.get('username');
    dispatch(fetchUser(username))
      .then((action) => {
        // eslint-disable-next-line prefer-destructuring
        user = action.user;
        dispatch(fetchRecent(+user.accountId));
      })
      .then(() => dispatch(fetchChampMastery(+user.id)))
      .catch(err => console.error(err));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Summoner);
