import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/LiveGame.css';
import { Heroes } from '../../seed';

const LiveGameTeam = (props) => {
  console.log('props', props);
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            {
              props.color === 'blue' ?
                <th colSpan="4" className={styles.blueTeam}>{`${props.color[0].toUpperCase()}${props.color.slice(1)} Bans`}
                  {props.team.bannedChampions.map((el, index) => {
                  if (index < 5 && el.championId > 0) {
                  return (
                    <img
                      key={el.championId}
                      src={`/images/champions/${Heroes[el.championId].key}.png`}
                      alt={Heroes[el.championId].key}
                      className={styles.banSize}
                    />
                  );
                  }
                  return null;
              })}
                </th>
              :
                <th colSpan="4" className={styles.redTeam}> {`${props.color[0].toUpperCase()}${props.color.slice(1)} Bans`}{props.team.bannedChampions.map((el, index) => {
                if (index > 4 && el.championId > 0) {
                  return (
                    <img
                      key={el.championId}
                      src={`/images/champions/${Heroes[el.championId].key}.png`}
                      alt={Heroes[el.championId].key}
                      className={styles.banSize}
                    />
                  );
                }
                return null;
              })}
                </th>
            }
          </tr>
        </thead>

        {/* body for blue team table */}
        {
         props.color === 'blue' ?
           <tbody className={styles.tbody}>
             {props.team.participants && props.team.participants.filter(elm => (elm.teamId === 100))
        .map((el, index) => {
          const soloQ = props.team.playerData[index].find(el => el.queueType === 'RANKED_SOLO_5x5') || null;
          const flexQ = props.team.playerData[index].find(el => el.queueType === 'RANKED_FLEX_SR') || null;
          let soloRank = 'Unranked';
          let flexRank = 'Unranked';
          if (soloQ) soloRank = `${soloQ.tier[0]}${soloQ.tier.slice(1).toLowerCase()} ${soloQ.tier === 'MASTER' || soloQ.tier === 'CHALLENGER' ? '' : soloQ.rank} (${soloQ.leaguePoints}LP)`;
          if (flexQ) flexRank = `${flexQ.tier[0]}${flexQ.tier.slice(1).toLowerCase()} ${flexQ.tier === 'MASTER' || flexQ.tier === 'CHALLENGER' ? '' : flexQ.rank} (${flexQ.leaguePoints}LP)` || 'Unranked';
          return (
            <tr key={el.summonerId}>
              <th className={styles.td}>
                {el.summonerName}
              </th>
              <th className={styles.td}>
                <img
                  src={`images/${soloQ.tier.toLowerCase()}.png`}
                  alt="solo rank icon"
                  className={styles.rankSize}
                />
                {soloRank}
              </th>
              <th className={styles.td}>

                {
                  flexQ ?
                    <img
                      src={`images/${flexQ.tier.toLowerCase()}.png`}
                      alt="flex rank icon"
                      className={styles.rankSize}
                    />
              :
                    <img
                      src="images/unranked.png"
                      alt="flex rank icon"
                      className={styles.rankSize}
                    />
              }
                {flexRank}
              </th>
              <th className={styles.td}>
                {`${((soloQ.wins / (soloQ.wins + soloQ.losses)) * 100).toFixed(0)}%`}
              </th>
            </tr>
          );
})}
           </tbody>
        :
           <tbody>
             {props.team.participants && props.team.participants.filter(elm => (elm.teamId === 200))
             .map(el => (
               <tr key={el.summonerId}>
                 <th className={styles.td}>
                   {el.summonerName}
                 </th>
                 <th className={styles.td}>
                 some data
                 </th>
                 <th className={styles.td}>
                 something else
                 </th>
                 <th className={styles.td}>
              something else
                 </th>
               </tr>
            ))}
           </tbody>
        }
      </table>
    </div>
  );
};
LiveGameTeam.defaultProps = {
  team: {
    bannedChampions: [],
    gameMode: '',
    participants: [],
    playerData: [],
  },
};

LiveGameTeam.propTypes = {
  color: PropTypes.string.isRequired,
  team: PropTypes.shape({
    bannedChampions: PropTypes.arrayOf(PropTypes.object.isRequired),
    gameMode: PropTypes.string.isRequired,
    participants: PropTypes.arrayOf(PropTypes.object.isRequired),
    playerData: PropTypes.arrayOf(PropTypes.array.isRequired),
  }),

};
export default LiveGameTeam;
