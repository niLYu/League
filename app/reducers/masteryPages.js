import axios from 'axios';

/* -----------------    ACTIONS    -------------------- */

const GET_MASTERIES = 'GET_MASTERIES';

/* -------------    ACTION CREATORS    ---------------- */

const getMasteries = masteries => ({ type: GET_MASTERIES, masteries });

/* -------------    THUNK CREATORS     ---------------- */

export const fetchMasteryPages = userId => dispatch => axios.get(`api/playerInfo/accountMasteries/${userId}`)
  .then(res => res.data)
  .then(data => dispatch(getMasteries(data)));

/* -----------------    REDUCER    -------------------- */

export default function userReducer(masteryPages = {}, action) {
  switch (action.type) {
    case GET_MASTERIES:
      return action.masteries;
    default:
      return masteryPages;
  }
}
