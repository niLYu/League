import React from 'react';
import styles from './Profile.css';

const ProfileSummary = (props) => {
  let soloRank;
  if (props.summary.profile.length) {
    soloRank = props.summary.profile.filter((queue => queue.queueType === 'RANKED_SOLO_5x5'));
  }
  return (
    <div>
      {soloRank &&
      <div className={styles.profileContainer}>
        <div className={styles.flexRankIcon}>
          <img className={styles.rankImage}src={`/images/${soloRank[0].tier.toLowerCase()}.png`} alt="league tier" />
        </div>
        <div className={styles.flexItem}>
          <h1>{soloRank[0].tier}  {soloRank[0].rank}</h1>
          <h2>W/L: {soloRank[0].wins}W/{soloRank[0].losses}L </h2>
          <h2>W/L Ratio: {(soloRank[0].wins / (soloRank[0].wins + soloRank[0].losses)) * 100}%</h2>
          <h2>League Points: {soloRank[0].leaguePoints}</h2>
          <h2>{soloRank[0].leagueName}</h2>
        </div>
      </div>
          }
    </div>
  );
};
export default ProfileSummary;
