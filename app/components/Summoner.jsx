import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../reducers/user'

class Summoner extends Component {
  componentDidMount() {
    const search = this.props.location.search
    const params = new URLSearchParams(search)
    const username = params.get('username')
    this.props.fetchUser(username)
    // .then(()=> console.log('hello'))
  }
  render() {
    return (
      <div>Summoner</div>
    )
  }
}

const mapStateToProps = ({ user, recentGames, champMastery, runePages, masteries }) => ({ user, recentGames, champMastery, runePages, masteries })

const mapDispatchToProps = { fetchUser }

export default connect(mapStateToProps, mapDispatchToProps)(Summoner);
