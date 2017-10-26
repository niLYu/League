import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Champion } from './index';



const ChampionMasteries = (props) => {
  const { champions } = props;
  return (
    <div>
      <div> All Champion Masteries </div>
      {
          champions.map(champ => <Champion champ={champ} key={champ.championId} />)
      }
    </div>
  );
};


ChampionMasteries.propTypes = {
  champions : PropTypes.array.isRequired,
  // fetchLiveGame: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  champions: state.championMastery,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ChampionMasteries);
