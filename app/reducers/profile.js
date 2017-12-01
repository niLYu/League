import axios from 'axios';

/* -----------------    ACTIONS    -------------------- */

const GET_PROFILE = 'GET_PROFILE';

/* -------------    ACTION CREATORS    ---------------- */

const getProfile = profile => ({ type: GET_PROFILE, profile });

/* -------------    THUNK CREATORS     ---------------- */

export const fetchProfile = userId => dispatch => axios.get(`api/playerInfo/profile/${userId}`)
  .then(res => res.data)
  .then(data => dispatch(getProfile(data)));

/* -----------------    REDUCER    -------------------- */

export default function profileReducer(profile = [], action) {
  switch (action.type) {
    case GET_PROFILE:
      return action.profile;
    default:
      return profile;
  }
}
