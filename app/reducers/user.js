import axios from 'axios';

/* -----------------    ACTIONS    -------------------- */

const GET_USER = 'GET_USER';
const SAVE_USER = 'SAVE_USER';

/* -------------    ACTION CREATORS    ---------------- */

const getUser = user => ({ type: GET_USER, user });
const saveUser = userInfo => ({ type: SAVE_USER, userInfo });


/* -------------    THUNK CREATORS     ---------------- */

// gets player info by username then finds or create in db
export const fetchUser = username => dispatch => axios.get(`/api/playerInfo/player/${username}`)
  .then(res => res.data)
  .then(user => dispatch(getUser(user)))
  // .then(res => {
  //   axios.post(`api/playerInfo/player/${res.user.name}`, res.user)
  //     .then(res => res.data)
  //     .then(userInfo => dispatch(saveUser(userInfo)))
  //   return res.user
  // })
  .catch(err => console.error(err));

/* -----------------    REDUCER    -------------------- */


export default function userReducer(user = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return user;
  }
}
