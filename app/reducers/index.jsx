import { combineReducers } from 'redux';

import user from './user';
import games from './games';
import championMastery from './championMastery';
import masteryPages from './masteryPages';
import runePages from './runePages';
import soloChallengers from './soloChallengers';
import liveGame from './liveGame';
import profile from './profile';
import news from './news';
import matchInfo from './matchInfo';

// exporting from one central file, helps keep track of thunks as well
export * from './championMastery';
export * from './liveGame';
export * from './games';
export * from './masteryPages';
export * from './runePages';
export * from './soloChallengers';
export * from './user';
export * from './profile';
export * from './news';
export * from './matchInfo';

const rootReducer = combineReducers({
  user,
  games,
  championMastery,
  masteryPages,
  runePages,
  soloChallengers,
  liveGame,
  profile,
  news,
  matchInfo,
});

export default rootReducer;
