import axios from 'axios'

const GET_USER = 'GET_USER';

const getUser = user => ({ type: GET_USER, user})

export const fetchUser = username => dispatch => {
  axios.get(`/api/playerInfo/player/${username}`)
  .then(res => res.data)
  .then(user => dispatch(getUser(user)))
}

export default function userReducer(user = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return user;
  }
}
