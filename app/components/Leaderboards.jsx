import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSoloChallengers } from '../reducers/soloChallengers';


class Leaderboards extends Component {
  componentDidMount() {
    this.props.fetchSoloChallengers();
  }

  render() {
    return (
      <div>
        challengers are here in props
      </div>
    );
  }
}

const mapStateToProps = ({ soloChallengers }) => ({ soloChallengers });

const mapDispatchToProps = { fetchSoloChallengers };

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboards);
