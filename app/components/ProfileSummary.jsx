import React from 'react';

const ProfileSummary = (props) => {
  let soloRank;
  if (props.summary.profile.length) {
    soloRank = props.summary.profile.filter((queue => queue.queueType === 'RANKED_SOLO_5x5'));
  }
  return (
    <div>
      <h2>{props.summary.user.name}</h2>
      {soloRank &&
      <div>
        <img src={`/images/${soloRank[0].tier.toLowerCase()}.png`} alt="league tier" />
        <h3>W/L: {soloRank[0].wins}W/{soloRank[0].losses}L </h3>
        <h3>W/L Ratio: {(soloRank[0].wins / (soloRank[0].wins + soloRank[0].losses)) * 100}%</h3>
        <h3>{soloRank[0].tier}  {soloRank[0].rank}</h3>
        <h3>League Points: {soloRank[0].leaguePoints}</h3>
        <h3>{soloRank[0].leagueName}</h3>
      </div>
          }
    </div>
  );
};
export default ProfileSummary;
