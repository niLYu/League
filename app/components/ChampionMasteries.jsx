import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Champion } from './index';
import styles from '../styles/ChampionMastery.css';

const ChampionMasteries = ({ champions }) => {
  const filtered = champions.slice(0, 10);
  return (
    <div className={styles.container}>
      <div> All Champion Masteries </div>
      { filtered.length &&
          filtered.map(champ => <Champion champ={champ} key={champ.championId} />)
      }
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
