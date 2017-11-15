import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Profile.css';
import { SoloFive, FlexFive, FlexThree } from './index';

const ProfileSummary = (props) => {
  const soloRank = props.queueRanks.find((queue => queue.queueType === 'RANKED_SOLO_5x5'));
  const flexRank = props.queueRanks.find((queue => queue.queueType === 'RANKED_FLEX_SR'));
  const ttRank = props.queueRanks.find((queue => queue.queueType === 'RANKED_FLEX_TT'));
  return (
    <div className={styles.flexcontainer}>
      <SoloFive soloRank={soloRank} />
      <FlexFive flexRank={flexRank} />
      <FlexThree ttRank={ttRank} />
    </div>
  );
};
ProfileSummary.defaultProps = {
  queueRanks: [],
};
ProfileSummary.propTypes = {
  queueRanks: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default ProfileSummary;
