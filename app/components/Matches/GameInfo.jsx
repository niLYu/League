import React from 'react';
import PropTypes from 'prop-types';
import champList from '../../../champions';
import queueMode from '../../util/queueModes';
import summonerSpells from '../../../summonerSpellsId';
import styles from '../../styles/Match.css';
import assets from '../../../public/settings';

const GameInfo = (props) => {
  const champ = champList[props.champion].id;
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
      <div className={styles.icons_container}>
        {/* eslint-disable-next-line */}
        <img className={styles.champion} src={`${assets.champion}/${champ}.png`} alt={`${champ} icon`} />
        <div className={styles.summonerSpells}>
          <img src={`${assets.summonerSpell}/${ss1}.png`} alt={`${ss1} icon`} />
          <img src={`${assets.summonerSpell}/${ss2}.png`} alt={`${ss2} icon`} />
        </div>
      </div>
      <div className={props.gameOutcome === 'Victory' ? styles.victory_text : styles.defeat_text}>
        {props.gameOutcome}
      </div>
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
