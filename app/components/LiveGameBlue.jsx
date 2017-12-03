import React from 'react';
import styles from '../styles/LiveGame.css';
import { Heroes } from '../../seed';

const LiveGameBlue = ({ team }) => (
  <div>
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.td}>Player</th>
          <th className={styles.td}>some column</th>
          <th className={styles.td}>some other column</th>
        </tr>
      </thead>
    </table>

    {/* blue team table */}

    <table className={styles.table}>
      <thead>
        <tr>
          <th colSpan="3" className={styles.blueTeam}> Team{'   '}{team.bannedChampions.map((el, index) => {
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
          <th className={styles.blueTeam}>{'   '}
          </th>
          <th className={styles.blueTeam}>{'   '}
          </th>
        </tr>
      </thead>

      {/* body for blue team table */}

      <tbody>
        {team.participants &&
      team.participants.filter(elm => (elm.teamId === 100))
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
    </table>
  </div>
);

export default LiveGameBlue;
