import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Champion } from './index';

const ChampionMasteries = (props) => {
  const { champions } = props;
  // const filtered = champions.filter(el => (el.championLevel > 4));
  return (
    <div>
      <div> All Champion Masteries </div>
      <table>
      <tr>
        <th>#</th>
        <th>Champion</th>
        <th>Played</th>
        <th>KDA</th>
        <th>Gold</th>
        <th>CS</th>
        <th>Turrets Killed</th>
        <th>Max kills</th>
        <th>Max Deaths</th>
        <th>Average Damage Dealt</th>
        <th>Average Damage Taken</th>
        <th>Double Kill</th>
        <th>Triple Kill</th>
        <th>Quadra Kill</th>
      </tr>
      { filtered.length &&
          filtered.map((champ, index) => <Champion index={index} champ={champ} key={champ.championId} />)
      }
      </table>
    </div>
  );
};

// ChampionMasteries.propTypes = {
//   champions: PropTypes.arrayOf.isRequired,
// };


const mapStateToProps = state => ({
  champions: state.championMastery.filter(champion => (champion.championLevel > 4)),
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ChampionMasteries);
