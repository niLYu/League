import { combineReducers } from 'redux';

import user from './user';
import games from './games';
import championMastery from './championMastery';
import masteryPages from './masteryPages';
import runePages from './runePages';
import soloChallengers from './soloChallengers';
import liveGame from './liveGame';

const rootReducer = combineReducers({
  user, games, championMastery, masteryPages, runePages, soloChallengers, liveGame,
});

export default rootReducer;
