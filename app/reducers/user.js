import axios from 'axios';

/* -----------------    ACTIONS    -------------------- */

const CLEAR_USER = 'CLEAR_USER';
const GET_USER = 'GET_USER';


/* -------------    ACTION CREATORS    ---------------- */

const clearUser = () => ({ type: CLEAR_USER });
const getUser = user => ({ type: GET_USER, user });


/* -------------    THUNK CREATORS     ---------------- */

export const fetchInitialState = () => dispatch => dispatch(clearUser());

// gets player info by username then finds or create in db
export const fetchUser = username => dispatch => axios.get(`/api/playerInfo/player/${username}`)
  .then(res => res.data)
  .then(user => dispatch(getUser(user)))
  .catch(err => console.error(err));


/* -----------------    REDUCER    -------------------- */

const initialState = {
  id: 0,
  accountId: 0,
};

export default function userReducer(user = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case CLEAR_USER:
      return user;
    default:
      return user;
  }
}
