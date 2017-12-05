import React from 'react';
import PropTypes from 'prop-types';
import champList from '../../../seed';
import queueMode from '../../util/queueModes';
import styles from '../../styles/Match.css';

const GameInfo = (props) => {
  const champ = champList.Heroes[props.champion].key;
  const currentDate = Date.now();
  const timeDiff = (currentDate - props.timestamp) / 1000 / 60; // minutes ago
  const hoursAgo = timeDiff / 60;

  const getMatchDate = () => {
    const daysAgo = Math.floor(hoursAgo / 24);
    if (timeDiff < 60) {
      return `${Math.floor(timeDiff)} minutes ago`;
    } else if (hoursAgo < 24) {
      if (hoursAgo < 2) {
        return `${Math.floor(hoursAgo)} hour ago`;
      }
      return `${Math.floor(hoursAgo)} hours ago`;
    } else if (daysAgo < 2) {
      return `${daysAgo} day ago`;
    }
    return `${daysAgo} days ago`;
  };

  const displayDate = getMatchDate();

  return (
    <div className={styles.gameInfo_container}>
      <div>{queueMode[props.queue].map}</div>
      <img src={`/images/champions/${champ}.png`} alt={`${champ} icon`} />
      <div>{props.gameOutcome}</div>
      <div>{displayDate}</div>
    </div>
  );
};

GameInfo.propTypes = {
  champion: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired,
  queue: PropTypes.number.isRequired,
  gameOutcome: PropTypes.string.isRequired,
};

export default GameInfo;
