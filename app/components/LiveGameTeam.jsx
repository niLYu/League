import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/LiveGame.css';
import { Heroes } from '../../seed';

const LiveGameTeam = props => (
  <div>
    {/* blue team table */}
    <table className={styles.table}>
      <thead>
        <tr>
          {
              props.color === 'blue' ?
                <th colSpan="3" className={styles.blueTeam}>{props.color}
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
                <th colSpan="3" className={styles.redTeam}> {props.color}{props.team.bannedChampions.map((el, index) => {
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
           <tbody>
             {props.team.participants && props.team.participants.filter(elm => (elm.teamId === 100))
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
          </tr>
          ))}
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
               </tr>
            ))}
           </tbody>
        }
    </table>
  </div>
);
LiveGameTeam.defaultProps = {
  team: {
    bannedChampions: [],
    gameMode: '',
  },
};

LiveGameTeam.propTypes = {
  color: PropTypes.string.isRequired,
  team: PropTypes.shape({
    bannedChampions: PropTypes.arrayOf(PropTypes.object.isRequired),
    gameMode: PropTypes.string.isRequired,
    participants: PropTypes.arrayOf(PropTypes.object.isRequired),
  }),

};
export default LiveGameTeam;
