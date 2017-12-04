import React from 'react';
import PropTypes from 'prop-types';
import champList from '../../../seed';
import queueMode from '../../util/queueModes';

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
      return `${daysAgo} day`;
    }
    return `${daysAgo} days ago`;
  };

  const displayDate = getMatchDate();

  return (
    <div>
      <h4>{queueMode[props.queue].map}</h4>
      <img src={`/images/champions/${champ}.png`} alt={`${champ} icon`} />
      <h4>{props.gameOutcome}</h4>
      <h4>{displayDate}</h4>
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
