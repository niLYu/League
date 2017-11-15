import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Profile.css';

const SoloFive = ({ soloRank }) => (
  <div>
    {soloRank.tier ?
      <div className={styles.flexcontainer}>
        <div className={styles.flexRankIcon}>
          <img className={styles.rankImage}src={`/images/${soloRank.tier.toLowerCase()}.png`} alt="league tier" />
        </div>
        <div className={styles.flexItem}>
          <h4>{soloRank.tier}  {soloRank.rank}</h4>
          <h5>Solo Queue 5v5</h5>
          <h5>W/L: {soloRank.wins}W/{soloRank.losses}L </h5>
          <h5>W/L Ratio: {((soloRank.wins / (soloRank.wins + soloRank.losses)) * 100).toFixed(2)}%</h5>
          <h5>League Points: {soloRank.leaguePoints}</h5>
          <h5>{soloRank.leagueName}</h5>
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

SoloFive.defaultProps = {
  soloRank: {
    tier: '',
    wins: 0,
    losses: 0,
    leaguePoints: 0,
    leagueName: '',
  },
};
SoloFive.propTypes = {
  soloRank: PropTypes.shape({
    tier: PropTypes.string.isRequired,
    wins: PropTypes.number.isRequired,
    losses: PropTypes.number.isRequired,
    leaguePoints: PropTypes.number.isRequired,
    leagueName: PropTypes.string.isRequired,
  }),
};

export default SoloFive;
