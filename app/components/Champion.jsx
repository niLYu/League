import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../styles/ChampionMastery.css';
import { Heroes } from '../../seed';

const Champion = (props) => {
  const {
    championId, name, key, title, championLevel, championPointsSinceLastLevel, championPointsUntilNextLevel, championPoints,
  } = props.champ;
  const fixedTitle = title.slice(4);
  return (
    <div className={styles.championBox}>
      <div className={styles.grow}>
        <img className={styles.imgSize} src={`/images/champions/${Heroes[championId].key}.png`} alt="championIcon" />
        <img className={styles.crest} src={`images/masteryCrest/M${championLevel}Square.png`} alt="crest" />
      </div>
    </div>
  );
};


Champion.propTypes = {
  champ: PropTypes.object.isRequired,
};


const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Champion);
