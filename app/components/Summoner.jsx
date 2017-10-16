import React, { Component } from 'react'
import { connect } from 'react-redux'
import Filter from './Filter'
import axios from 'axios'


import { fetchUser } from '../reducers/user'

class Summoner extends Component {
  componentDidMount() {
    const search = this.props.location.search
    const params = new URLSearchParams(search)
    const username = params.get('username')
    this.props.fetchUser(username)
  }
  render() {
    return (
      <div>
        Summoner
        {
          !this.props.user.accountId ?
          <div>Loading... </div>
          :
          <Filter accountId ={this.props.user.accountId}/>
        }
        </div>
    )
  }
}

const mapStateToProps = ({ user, recentGames, champMastery, runePages, masteries }) => ({ user, recentGames, champMastery, runePages, masteries })

const mapDispatchToProps = { fetchUser }

export default connect(mapStateToProps, mapDispatchToProps)(Summoner);
