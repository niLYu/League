import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import champList from '../../../seed';
import styles from '../../styles/Match.css';
import assets from '../../../public/settings';

const Players = (props) => {
  const champs = champList.Heroes;
  const blueTeam = props.players.participantIdentities.slice(0, 5);
  const redTeam = props.players.participantIdentities.slice(5, 10);
  const { participants } = props.players;

  return (
    <div className={styles.players_container}>
      <div className={styles.team_container}>
        {blueTeam.map((member) => {
          const champ = champs[participants[member.participantId - 1].championId].key;
          return (
            <div key={member.player.summonerName}>
              <div>
                <NavLink
                  to={{
                  pathname: '/summoner',
                  search: `username=${member.player.summonerName}`,
                }}
                >
                  <img className={styles.champ_list} src={`${assets.champion}/${champ}.png`} alt={`${champ} icon`} />
                  {member.player.summonerName.length > 10
                  ? `${member.player.summonerName.slice(0, 10)}...`
                  : member.player.summonerName
                  }
                </NavLink>
              </div>
            </div>);
          })
        }
      </div>

      <div className={styles.team_container}>
        {redTeam.map((member) => {
          const champ = champs[participants[member.participantId - 1].championId].key;
          return (
            <div key={member.player.summonerName}>
              <div>
                <NavLink
                  to={{
                  pathname: '/summoner',
                  search: `username=${member.player.summonerName}`,
                }}
                >
                  <img className={styles.champ_list} src={`${assets.champion}/${champ}.png`} alt={`${champ} icon`} />
                  {member.player.summonerName.length > 10
                  ? `${member.player.summonerName.slice(0, 10)}...`
                  : member.player.summonerName
                }
                </NavLink>
              </div>
            </div>);
          })
        }
      </div>
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.shape({
    participantIdentities: PropTypes.arrayOf(PropTypes.object.isRequired),
  }),
};

Players.defaultProps = {
  players: {
    participantIdentities: [{}],
  },
};

export default Players;
