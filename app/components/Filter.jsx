import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecent } from '../reducers/user'
import MatchHistory from './MatchHistory'

class Filter extends Component {
  componentDidMount() {
    this.props.fetchRecent(this.props.accountId)
  }

  render() {
    console.log('in filter', this.props.user.recentGames)
    return (
      <div>
        Filter
        {!this.props.user ?
          <div>Loading...</div>
          :
          <MatchHistory props={this.props.user} />
        }
      </div>
    )

  }
}
const mapStateToProps = ({user}) =>({user})
const mapDispatchToProps = { fetchRecent }

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
