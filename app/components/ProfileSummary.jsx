import React from 'react';
import styles from './Profile.css';

const ProfileSummary = (props) => {
  let soloRank;
  if (props.summary.profile.length) {
    soloRank = props.summary.profile.filter((queue => queue.queueType === 'RANKED_SOLO_5x5'));
  }
  let flexRank;
  if (props.summary.profile.length) {
    flexRank = props.summary.profile.filter((queue => queue.queueType === 'RANKED_FLEX_SR'));
  }
  let ttRank;
  if (props.summary.profile.length) {
    ttRank = props.summary.profile.filter((queue => queue.queueType === 'RANKED_FLEX_TT'));
  }
  return (
    <div className={styles.flexcontainer}>
      {soloRank.length ?
        <div className={styles.flexcontainer}>
          <div className={styles.flexRankIcon}>
            <img className={styles.rankImage}src={`/images/${soloRank[0].tier.toLowerCase()}.png`} alt="league tier" />
          </div>
          <div className={styles.flexItem}>
            <h4>{soloRank[0].tier}  {soloRank[0].rank}</h4>
            <h5>Solo Queue 5v5</h5>
            <h5>W/L: {soloRank[0].wins}W/{soloRank[0].losses}L </h5>
            <h5>W/L Ratio: {((soloRank[0].wins / (soloRank[0].wins + soloRank[0].losses)) * 100).toFixed(2)}%</h5>
            <h5>League Points: {soloRank[0].leaguePoints}</h5>
            <h5>{soloRank[0].leagueName}</h5>
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
      {flexRank.length ?
        <div className={styles.flexcontainer}>
          <div className={styles.flexRankIcon}>
            <img className={styles.rankImage}src={`/images/${flexRank[0].tier.toLowerCase()}.png`} alt="league tier" />
          </div>
          <div className={styles.flexItem}>
            <h4>{flexRank[0].tier}  {flexRank[0].rank}</h4>
            <h5>Flex Queue 5v5</h5>
            <h5>W/L: {flexRank[0].wins}W/{flexRank[0].losses}L </h5>
            <h5>W/L Ratio: {((flexRank[0].wins / (flexRank[0].wins + flexRank[0].losses)) * 100).toFixed(2)}%</h5>
            <h5>League Points: {flexRank[0].leaguePoints}</h5>
            <h5>{flexRank[0].leagueName}</h5>
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
      {ttRank.length ?
        <div className={styles.flexcontainer}>
          <div className={styles.flexRankIcon}>
            <img className={styles.rankImage}src={`/images/${ttRank[0].tier.toLowerCase()}.png`} alt="league tier" />
          </div>
          <div className={styles.flexItem}>
            <h4>{ttRank[0].tier}  {ttRank[0].rank}</h4>
            <h5>Flex Queue 3v3</h5>
            <h5>W/L: {ttRank[0].wins}W/{ttRank[0].losses}L </h5>
            <h5>W/L Ratio: {((ttRank[0].wins / (ttRank[0].wins + ttRank[0].losses)) * 100).toFixed(2)}%</h5>
            <h5>League Points: {ttRank[0].leaguePoints}</h5>
            <h5>{ttRank[0].leagueName}</h5>
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
            <h5>3v3</h5>
          </div>
        </div>
          }
    </div>
  );
};
export default ProfileSummary;
