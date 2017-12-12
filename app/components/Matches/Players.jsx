import React from 'react';
import PropTypes from 'prop-types';
import champList from '../../../seed';
import styles from '../../styles/Match.css';

const Players = (props) => {
  const champs = champList.Heroes;
  const blueTeam = props.players.participantIdentities.slice(0, 5);
  const redTeam = props.players.participantIdentities.slice(5, 10);
  const participants = props.players.participants;

  return (
    <div>
      <div>
        {blueTeam.map((member) => {
          const champ = champs[participants[member.participantId - 1].championId].key;
          return (
            <div key={member.player.summonerName}>
              <div>{member.player.summonerName}</div>
              <img className={styles.champ_list} src={`/images/champions/${champ}.png`} alt={`${champ} icon`} />
            </div>
          );
})}
      </div>
      <div>
        {redTeam.map((member) => {
        const champ = champs[participants[member.participantId - 1].championId].key;
        return (
          <div key={member.player.summonerName}>
            <div>{member.player.summonerName}</div>
            <img className={styles.champ_list} src={`/images/champions/${champ}.png`} alt={`${champ} icon`} />
          </div>
        );
})}
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
