import axios from 'axios';

/* -----------------    ACTIONS    -------------------- */

const GET_GAMES = 'GET_GAMES';

/* -------------    ACTION CREATORS    ---------------- */

const getRecent = games => ({ type: GET_GAMES, games });

/* -------------    THUNK CREATORS     ---------------- */

export const fetchRecent = accountId => (dispatch) => {
  axios.get(`api/playerInfo/recent/${accountId}`)
    .then(games => games.data)
    .then(games => dispatch(getRecent(games)));
};

/* -----------------    REDUCER    -------------------- */

export default function gamesReducer(games = { matches: [] }, action) {
  switch (action.type) {
    case GET_GAMES:
      return action.games;
    default:
      return games;
  }
}
