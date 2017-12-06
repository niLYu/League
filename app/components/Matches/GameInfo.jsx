import React from 'react';
import PropTypes from 'prop-types';
import champList from '../../../seed';
import queueMode from '../../util/queueModes';
import summonerSpells from '../../../summonerSpellsId';
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
  const ss1 = summonerSpells[props.userData.spell1Id].id;
  const ss2 = summonerSpells[props.userData.spell2Id].id;

  return (
    <div className={styles.gameInfo_container}>
      <div>{queueMode[props.queue].map}</div>
      <img src={`/images/champions/${champ}.png`} alt={`${champ} icon`} />
      <img src={`/images/summonerSpells/${ss1}.png`} alt={`${ss1} icon`} />
      <img src={`/images/summonerSpells/${ss2}.png`} alt={`${ss2} icon`} />
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
  userData: PropTypes.shape({
    spell1Id: PropTypes.number.isRequired,
    spell2Id: PropTypes.number.isRequired,
  }),
};

GameInfo.defaultProps = {
  userData: { spell1Id: 0, spell2id: 0 },
};

export default GameInfo;
