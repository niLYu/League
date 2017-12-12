import React from 'react';
import PropTypes from 'prop-types';

const Players = (props) => {
  const blueTeam = props.players.participantIdentities.slice(0, 5);
  const redTeam = props.players.participantIdentities.slice(5, 10);
  console.log(blueTeam);
  return (
    <div>
      <div>
        {blueTeam.map(member =>
          <div>{member.player.summonerName}</div>)}
      </div>
      <div>
        {redTeam.map(member =>
          <div>{member.player.summonerName}</div>)}
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
