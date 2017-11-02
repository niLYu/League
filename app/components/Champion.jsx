import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Champion.css';

const Champion = (props) => {
  const {
    championId, name, key, title, championLevel, championPointsSinceLastLevel, championPointsUntilNextLevel,
  } = props.champ;
  return (
    <div>
     <div >
        <img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${key}.png`} alt="championIcon" className={styles.img_circular}/>
      </div>
      <div>
        {name}<br />
        {title}
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
