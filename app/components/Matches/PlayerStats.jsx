import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Match.css';

const PlayerStats = (props) => {
  const { stats } = props.userData;
  return (
    <div className={styles.player_stats_container}>
      <div>Level: {stats.champLevel}</div>
      <div>CS: {stats.totalMinionsKilled + stats.neutralMinionsKilled}</div>
      {/* checking against undefined because 0 wards can be placed which is also falsy */}
      {stats.wardsPlaced !== undefined &&
      <div>Wards: {stats.wardsPlaced}</div>
      }
    </div>
  );
};

PlayerStats.propTypes = {
  userData: PropTypes.shape({
    stats: PropTypes.shape({
      champLevel: PropTypes.number.isRequired,
      totalMinionsKilled: PropTypes.number.isRequired,
      neutralMinionsKilled: PropTypes.number.isRequired,
    }),
  }),
};

PlayerStats.defaultProps = {
  userData: {
    stats: {
      champLevel: 0,
      totalMinionsKilled: 0,
      neutralMinionsKilled: 0,
    },
  },
};

export default PlayerStats;
