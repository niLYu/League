import React from 'react';
import { connect } from 'react-redux';
import styles from '../../styles/Match.css';
import GameInfo from './GameInfo';

const Match = props => (
  <div className={styles.match_container}>
    <GameInfo {...props} />
  </div>
);

const mapStateToProps = ({ matchInfo }) => ({ matchInfo });

export default connect(mapStateToProps, null)(Match);
