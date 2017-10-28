import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Column, Cell } from 'fixed-data-table';
import { fetchLiveGame } from '../reducers/liveGame';


class LiveGame extends Component {
  componentDidMount() {
    this.props.fetchLiveGame(this.props.id);
  }

  render() {
    // console.log(this.props.liveGame);
    return (
      <div />
    );
  }
}
LiveGame.propTypes = {
  fetchLiveGame: PropTypes.func.isRequired,
};


const mapStateToProps = ({ liveGame }) => ({ liveGame });

const mapDispatchToProps = { fetchLiveGame };

export default connect(mapStateToProps, mapDispatchToProps)(LiveGame);
