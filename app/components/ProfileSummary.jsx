import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Profile.css';
import { QueueRank } from './index';

const ProfileSummary = (props) => {
  const soloRank = props.queueRanks.find((queue => queue.queueType === 'RANKED_SOLO_5x5'));
  const flexRank = props.queueRanks.find((queue => queue.queueType === 'RANKED_FLEX_SR'));
  const ttRank = props.queueRanks.find((queue => queue.queueType === 'RANKED_FLEX_TT'));
  if (soloRank) soloRank.queueType = 'Ranked Solo 5v5';
  if (flexRank) flexRank.queueType = 'Flex Queue 5v5';
  if (ttRank) ttRank.queueType = 'Flex Queue 3v3';
  return (
    <div className={styles.flexcontainer}>
      <QueueRank rank={soloRank} />
      <QueueRank rank={flexRank} />
      <QueueRank rank={ttRank} />
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
