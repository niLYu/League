import axios from 'axios';

/* -----------------    ACTIONS    -------------------- */

const GET_SOLO_CHALLENGER = 'GET_SOLO_CHALLENGER';

/* -------------    ACTION CREATORS    ---------------- */

const getRecent = challengers => ({ type: GET_SOLO_CHALLENGER, challengers });

/* -------------    THUNK CREATORS     ---------------- */

export const fetchSoloChallengers = () => (dispatch) => {
  axios.get('api/playerInfo/solochallengers')
    .then(players => players.data)
    .then(players => dispatch(getRecent(players)))
    .catch(err => console.error(err));
};

/* -----------------    REDUCER    -------------------- */

export default function challengerReducer(challengers = { entries: [] }, action) {
  switch (action.type) {
    case GET_SOLO_CHALLENGER:
      return action.challengers;
    default:
      return challengers;
  }
}
