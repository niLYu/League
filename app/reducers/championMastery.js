import axios from 'axios';

/* -----------------    ACTIONS    -------------------- */

const GET_CHAMPION_MASTERY = 'GET_CHAMPION_MASTERY';

/* -------------    ACTION CREATORS    ---------------- */

const getChampMastery = champMastery => ({ type: GET_CHAMPION_MASTERY, champMastery });

/* -------------    THUNK CREATORS     ---------------- */

export const fetchChampMastery = userId => dispatch => axios.get(`api/playerInfo/championMastery/${userId}`)
  .then(games => games.data)
  .then(games => dispatch(getChampMastery(games)));

/* -----------------    REDUCER    -------------------- */

export default function championMasteryReducer(champMastery = {}, action) {
  switch (action.type) {
    case GET_CHAMPION_MASTERY:
      return action.champMastery;
    default:
      return champMastery;
  }
}
