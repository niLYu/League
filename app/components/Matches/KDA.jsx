import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Match.css';

const KDA = (props) => {
  const { kills, deaths, assists } = props.userData.stats;
  const killAssistRatio = ((kills + assists) / deaths).toFixed(2);
  return (
    <div className={styles.kda_container}>
      <div>KDA</div>
      <div>{kills} / {deaths} / {assists}</div>
      <div>{killAssistRatio} : 1</div>
    </div>
  );
};

KDA.propTypes = {
  userData: PropTypes.shape({
    stats: PropTypes.shape({
      kills: PropTypes.number.isRequired,
      deaths: PropTypes.number.isRequired,
      assists: PropTypes.number.isRequired,
    }),
  }),
};

KDA.defaultProps = {
  userData: {
    stats: {
      kills: 0,
      deaths: 0,
      assists: 0,
    },
  },
};

export default KDA;
