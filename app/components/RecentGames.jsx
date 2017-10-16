import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecent } from '../reducers/user'

class RecentGames extends Component {
  componentDidMount(){
    this.props.fetchRecent(this.props.accountId)
  }

  render() {
    return (
      <div>
        hello
      </div>
    )

  }
}

const mapDispatchToProps = { fetchRecent}

export default connect(null, mapDispatchToProps)(RecentGames)
