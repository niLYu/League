import React from 'react';
import PropTypes from 'prop-types';
import champList from '../../seed';

const Match = (props) => {
  const champ = champList.Heroes[props.champion].key;
  const datePlayed = JSON.stringify(new Date(props.timestamp));
  return (
    <div>
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
