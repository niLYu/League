import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../../styles/Match.css';
import GameInfo from './GameInfo';

const Match = (props) => {
  const participants = props.details.participantIdentities;

  // eslint-disable-next-line consistent-return
  const participantId = (() => {
    for (let i = 0; i < participants.length; i += 1) {
      if (participants[i].player.summonerId === props.user.id) {
        return participants[i].participantId;
      }
    }
  })();

  const participantData = props.details.participants[participantId - 1];
  const gameOutcome = participantData.stats.win ? 'Victory' : 'Defeat';

  return (
    <div className={styles.match_container}>
      <GameInfo {...props} gameOutcome={gameOutcome} />
    </div>
  );
};

Match.propTypes = {
  details: PropTypes.shape({
    participantIdentities: PropTypes.array.isRequired,
    participants: PropTypes.array.isRequired,
  }),
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

Match.defaultProps = {
  details: { participantIdentities: [], participants: [] },
  user: { id: 0 },
};

const mapStateToProps = ({ matchInfo, user }) => ({ matchInfo, user });

export default connect(mapStateToProps, null)(Match);
