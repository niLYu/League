import { combineReducers } from 'redux';

import user from './user';
import games from './gamesReducer';

const rootReducer = combineReducers({
  user, games
})

export default rootReducer;
