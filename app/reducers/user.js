import axios from 'axios';

/* -----------------    ACTIONS    -------------------- */

const GET_USER = 'GET_USER';

/* -------------    ACTION CREATORS    ---------------- */

const getUser = user => ({ type: GET_USER, user });


/* -------------    THUNK CREATORS     ---------------- */

// gets player info by username then finds or create in db
export const fetchUser = username => dispatch => axios.get(`/api/playerInfo/player/${username}`)
  .then(res => res.data)
  .then(user => dispatch(getUser(user)))
  .catch(err => console.error(err));

/* -----------------    REDUCER    -------------------- */

const InitialState = {
  id: 0,
  accountId: 0
};

export default function userReducer(user = InitialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return user;
  }
}
