import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Champion } from './index';
import styles from '../styles/ChampionMastery.css';

const ChampionMasteries = ({ champions }) => {
  const filtered = champions.slice(0, 12);
  return (
    <div className={styles.championContainer}>
      <h2>Champion Masteries</h2>
      <div className={styles.container}>
        { filtered.length &&
          filtered.map(champ => <Champion champ={champ} key={champ.championId} />)
      }
      </div>
    </div>
  );
};

// ChampionMasteries.propTypes = {
//   champions: PropTypes.arrayOf.isRequired,
// };


const mapStateToProps = state => ({
  champions: state.championMastery,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ChampionMasteries);
