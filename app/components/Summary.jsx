import React from 'react';
import { Match } from './index';

const Summary = props => (
  <div>
    <div>Summary of Recent Games</div>
    {/* {props.games.matches.map(game =>
      (<Match {...game} key={game.gameId} />))
    } */}
  </div>
);

export default Summary;
