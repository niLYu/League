import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Profile.css';

const QueueRank = ({ rank }) => (
  <div>
    {rank.tier ?
      <div className={styles.flexcontainer}>
        <div className={styles.flexRankIcon}>
          <img className={styles.rankImage}src={`/images/${rank.tier.toLowerCase()}.png`} alt="league tier" />
        </div>
        <div className={styles.flexItem}>
          <h4>{rank.tier}  {rank.rank}</h4>
          <h5>{rank.queueType}</h5>
          <h5>W/L: {rank.wins}W/{rank.losses}L </h5>
          <h5>W/L Ratio: {((rank.wins / (rank.wins + rank.losses)) * 100).toFixed(2)}%</h5>
          <h5>League Points: {rank.leaguePoints}</h5>
          <h5>{rank.leagueName}</h5>
        </div>
      </div>
      :
      <div className={styles.flexcontainer}>
        <div className={styles.flexRankIcon}>
          <img className={styles.rankImage}src="/images/unranked.png" alt="league tier" />
        </div>
        <div className={styles.flexItemCentered}>
          <h5>Unranked</h5>
          <h5>Solo Queue</h5>
          <h5>5v5</h5>
        </div>
      </div>
        }
  </div>
);

QueueRank.defaultProps = {
  rank: {
    tier: '',
    wins: 0,
    losses: 0,
    leaguePoints: 0,
    leagueName: '',
  },
};
QueueRank.propTypes = {
  rank: PropTypes.shape({
    tier: PropTypes.string.isRequired,
    wins: PropTypes.number.isRequired,
    losses: PropTypes.number.isRequired,
    leaguePoints: PropTypes.number.isRequired,
    leagueName: PropTypes.string.isRequired,
  }),
};

export default QueueRank;
