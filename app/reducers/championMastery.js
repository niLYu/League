import axios from 'axios';
import { Heroes } from '../../seed';

/* -----------------    ACTIONS    -------------------- */

const GET_CHAMPION_MASTERY = 'GET_CHAMPION_MASTERY';

/* -------------    ACTION CREATORS    ---------------- */

const getChampMastery = champMastery => ({ type: GET_CHAMPION_MASTERY, champMastery });

/* -------------    THUNK CREATORS     ---------------- */

export const fetchChampMastery = (userId, limit = 10) => dispatch => axios.get(`api/playerInfo/championMastery/${userId}`)
  .then((response) => {
    const champions = response.data.map((champion) => {
      const extraInfo = Heroes[champion.championId];
      return { ...champion, ...extraInfo };
    });
    dispatch(getChampMastery(champions));
  });

/* -----------------    REDUCER    -------------------- */

const initialState = [];

export default function championMasteryReducer(champMastery = initialState, action) {
  switch (action.type) {
    case GET_CHAMPION_MASTERY:
      return action.champMastery;
    default:
      return champMastery;
  }
}
