import React from 'react';
import PropTypes from 'prop-types';
import { Match } from './index';
import styles from '../styles/Summary.css';

const Summary = props => (
  <div className={styles.summary_container}>
    <div>Summary of Recent Games</div>
    {props.games.matches.map(game =>
      (<Match {...game} key={game.gameId} />))
    }
  </div>
);

Summary.propTypes = {
  games: PropTypes.shape({
    matches: PropTypes.array.isRequired,
  }),
};

Summary.defaultProps = {
  games: {},
};

export default Summary;
