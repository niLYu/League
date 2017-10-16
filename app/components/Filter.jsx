import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecent } from '../reducers/user'
import MatchHistory from './MatchHistory'

const Filter = (props) => {
  return (
    <div>
      Filter
        {!props.recentGames ?
        <div>Loading...</div>
        :
        <MatchHistory props={props.recentGames} />
      }
    </div>
  )
}


export default Filter
