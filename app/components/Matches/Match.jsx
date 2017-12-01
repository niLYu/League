import React from 'react';
import styles from '../../styles/Match.css';
import GameInfo from './GameInfo';

const Match = props => (
  <div className={styles.match_container}>
    <GameInfo {...props} />
  </div>
);

export default Match;
