import React, { Component } from 'react'
import { connect } from 'react-redux'
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
      <div>Summoner</div>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = { fetchUser }

export default connect(mapStateToProps, mapDispatchToProps)(Summoner);
