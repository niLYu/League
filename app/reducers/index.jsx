import { combineReducers } from 'redux';

import user from './user';
import games from './games';
import championMastery from './championMastery';
import masteryPages from './masteryPages';
import runePages from './runePages';
import soloChallengers from './soloChallengers';
import liveGame from './liveGame';

//exporting from one central file, helps keep track of thunks as well
export * from './championMastery';
export * from './liveGame';
export * from './games';
export * from './masteryPages';
export * from './runePages';
export * from './soloChallengers';
export * from './user';

const rootReducer = combineReducers({
  user, games, championMastery, masteryPages, runePages, soloChallengers, liveGame,
});

export default rootReducer;
