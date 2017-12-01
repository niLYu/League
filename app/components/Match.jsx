import React from 'react';
import PropTypes from 'prop-types';
import champList from '../../seed';
import styles from '../styles/Match.css';

const Match = (props) => {
  const champ = champList.Heroes[props.champion].key;
  const datePlayed = JSON.stringify(new Date(props.timestamp));
  return (
    <div className={styles.match_container}>
      <h3>{datePlayed}</h3>
      <img src={`/images/champions/${champ}.png`} alt={`${champ} icon`} />
    </div>
  );
};

Match.propTypes = {
  champion: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired,
};

export default Match;
