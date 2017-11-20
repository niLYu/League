import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Champion } from './index';


const Champions = ({ champions }) => (
  <div>
    <div> All Champion Masteries </div>
    <table>
      <thead>
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
      </thead>
      <tbody>
        {
          champions.map((champ, index) => <Champion index={index} champ={champ} key={champ.championId} />)
        }
      </tbody>
    </table>
  </div>
);


const mapState = ({championMastery}) => ({
  champions: championMastery.filter(champion => (champion.championLevel > 4)),
});


Champions.propTypes = {
  champions: PropTypes.array.isRequired,
};

// const mapDispatch = null;
export default connect(mapState, null)(Champions);
