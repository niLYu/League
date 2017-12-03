import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Match } from './index';
import styles from '../styles/Summary.css';

const Summary = props => (
  <div className={styles.summary_container}>
    <div>Summary of Recent Games</div>
    {props.games.matches.map(match =>
      (<Match {...match} key={match.gameId} />))
    }
  </div>);

Summary.propTypes = {
  games: PropTypes.shape({
    matches: PropTypes.array.isRequired,
  }),
};

Summary.defaultProps = {
  games: {},
};

const mapDispatchToProps = ({ games }) => ({ games });

export default connect(mapDispatchToProps, null)(Summary);
