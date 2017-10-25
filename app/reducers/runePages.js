import axios from 'axios';

/* -----------------    ACTIONS    -------------------- */

const GET_RUNE_PAGES = 'GET_RUNE_PAGES';

/* -------------    ACTION CREATORS    ---------------- */

const getRunePages = runePages => ({ type: GET_RUNE_PAGES, runePages });

/* -------------    THUNK CREATORS     ---------------- */

export const fetchRunePages = userId => dispatch => axios.get(`api/playerInfo/accountRunes/${userId}`)
  .then(res => res.data)
  .then(data => dispatch(getRunePages(data)));

/* -----------------    REDUCER    -------------------- */

export default function runePageReducer(runePages = { runePages: [], summonerId: 0 }, action) {
  switch (action.type) {
    case GET_RUNE_PAGES:
      return action.runePages;
    default:
      return runePages;
  }
}
