import axios from 'axios';

/* -----------------    ACTIONS    -------------------- */

const GET_MATCH = 'GET_MATCH';

/* -------------    ACTION CREATORS    ---------------- */

const getMatch = match => ({ type: GET_MATCH, match });

/* -------------    THUNK CREATORS     ---------------- */

export const fetchMatch = matchId => dispatch => axios.get(`api/matchInfo/match/${matchId}`)
  .then(match => match.data)
  .then(match => dispatch(getMatch(match)));

/* -----------------    REDUCER    -------------------- */

export default function matchInfoReducer(state = [], action) {
  switch (action.type) {
    case GET_MATCH:
      return [...state, ...[action.match]];
    default:
      return state;
  }
}
