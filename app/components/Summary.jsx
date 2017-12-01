import React from 'react';
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

export default Summary;
