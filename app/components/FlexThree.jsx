import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Profile.css';

const FlexThree = ({ ttRank }) => (
  <div>
    {ttRank.tier ?
      <div className={styles.flexcontainer}>
        <div className={styles.flexRankIcon}>
          <img className={styles.rankImage}src={`/images/${ttRank.tier.toLowerCase()}.png`} alt="league tier" />
        </div>
        <div className={styles.flexItem}>
          <h4>{ttRank.tier}  {ttRank.rank}</h4>
          <h5>Flex Queue 5v5</h5>
          <h5>W/L: {ttRank.wins}W/{ttRank.losses}L </h5>
          <h5>W/L Ratio: {((ttRank.wins / (ttRank.wins + ttRank.losses)) * 100).toFixed(2)}%</h5>
          <h5>League Points: {ttRank.leaguePoints}</h5>
          <h5>{ttRank.leagueName}</h5>
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
FlexThree.defaultProps = {
  ttRank: {
    tier: '',
    wins: 0,
    losses: 0,
    leaguePoints: 0,
    leagueName: '',
  },
};
FlexThree.propTypes = {
  ttRank: PropTypes.shape({
    tier: PropTypes.string.isRequired,
    wins: PropTypes.number.isRequired,
    losses: PropTypes.number.isRequired,
    leaguePoints: PropTypes.number.isRequired,
    leagueName: PropTypes.string.isRequired,
  }),
};

export default FlexThree;
