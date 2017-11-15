import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Profile.css';

const FlexFive = ({ flexRank }) => (
  <div>
    {flexRank.tier ?
      <div className={styles.flexcontainer}>
        <div className={styles.flexRankIcon}>
          <img className={styles.rankImage}src={`/images/${flexRank.tier.toLowerCase()}.png`} alt="league tier" />
        </div>
        <div className={styles.flexItem}>
          <h4>{flexRank.tier}  {flexRank.rank}</h4>
          <h5>Flex Queue 5v5</h5>
          <h5>W/L: {flexRank.wins}W/{flexRank.losses}L </h5>
          <h5>W/L Ratio: {((flexRank.wins / (flexRank.wins + flexRank.losses)) * 100).toFixed(2)}%</h5>
          <h5>League Points: {flexRank.leaguePoints}</h5>
          <h5>{flexRank.leagueName}</h5>
        </div>
      </div>
        :
      <div className={styles.flexcontainer}>
        <div className={styles.flexRankIcon}>
          <img className={styles.rankImage}src="/images/unranked.png" alt="league tier" />
        </div>
        <div className={styles.flexItemCentered}>
          <h5>Unranked</h5>
          <h5>Flex Queue</h5>
          <h5>5v5</h5>
        </div>
      </div>
}
  </div>
);
FlexFive.defaultProps = {
  flexRank: {
    tier: '',
    wins: 0,
    losses: 0,
    leaguePoints: 0,
    leagueName: '',
  },
};
FlexFive.propTypes = {
  flexRank: PropTypes.shape({
    tier: PropTypes.string.isRequired,
    wins: PropTypes.number.isRequired,
    losses: PropTypes.number.isRequired,
    leaguePoints: PropTypes.number.isRequired,
    leagueName: PropTypes.string.isRequired,
  }),
};
export default FlexFive;
