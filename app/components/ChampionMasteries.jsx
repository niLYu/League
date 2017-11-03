import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Champion } from './index';

const ChampionMasteries = (props) => {
  const { champions } = props;
  const filtered = champions.filter(el => (el.championLevel > 4));
  return (
    <div>
      <div> All Champion Masteries </div>
      { filtered.length &&
          filtered.map(champ => <Champion champ={champ} key={champ.championId} />)
      }
    </div>
  );
};

ChampionMasteries.propTypes = {
  champions: PropTypes.arrayOf.isRequired,
};


const mapStateToProps = state => ({
  champions: state.championMastery,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ChampionMasteries);
