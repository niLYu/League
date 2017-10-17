import React, { Component } from 'react'
import { connect } from 'react-redux'
import Filter from './Filter'
import axios from 'axios'
import PropTypes from 'prop-types';
import { fetchUser } from '../reducers/user';
import { fetchRecent } from '../reducers/gamesReducer';

class Summoner extends Component {
  componentDidMount() {
    const search = this.props.location.search
    const params = new URLSearchParams(search)
    const username = params.get('username')
    this.props.fetchUser(username)
      .then(() => {
        this.props.fetchRecent(this.props.user.accountId)
      })
  }
  render() {
    console.log(this.props.games,'games')
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
    )
  }
}

Summoner.propTypes = {
  location: PropTypes.shape({ search: PropTypes.string.isRequired }),
  fetchUser: PropTypes.func.isRequired,
};

Summoner.defaultProps = {
  location: { search: '' },
};

const mapStateToProps = ({ user, games }) => ({
  user, games
})

const mapDispatchToProps = { fetchUser, fetchRecent };

export default connect(mapStateToProps, mapDispatchToProps)(Summoner);
