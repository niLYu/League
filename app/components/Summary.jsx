import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Match } from './index';
import styles from '../styles/Summary.css';

const Summary = props => (
  <div className={styles.summary_container}>
    <h2 className={styles.title}>Match History</h2>
    {props.games.map(match =>
      (<Match {...match} key={match.gameId} />))
    }
  </div>);

Summary.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object.isRequired),
};

Summary.defaultProps = {
  games: [],
};

const mapDispatchToProps = ({ games }) => ({ games });

export default connect(mapDispatchToProps, null)(Summary);
