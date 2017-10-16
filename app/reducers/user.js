import axios from 'axios'

/* -----------------    ACTIONS    -------------------- */

const GET_USER = 'GET_USER';
const SAVE_USER = 'SAVE_USER'
const GET_GAMES = 'GET_GAMES'
const GET_CHAMPION_MASTERY = 'GET_CHAMPION_MASTERY'
const GET_RUNE_PAGES = 'GET_RUNE_PAGES'
const GET_MASTERIES = 'GET_MASTERIES'


/* -------------    ACTION CREATORS    ---------------- */


const getUser = user => ({ type: GET_USER, user })
const saveUser = userInfo => ({ type: SAVE_USER, userInfo })
const getRecent = games => ({ type: GET_GAMES, games })
const getChampMastery = champMastery => ({ type: GET_CHAMPION_MASTERY, champMastery })
const getRunePages = runePages => ({ type: GET_RUNE_PAGES, runePages })
const getMasteries = masteries => ({ type: GET_MASTERIES, masteries })



/* -------------    THUNK CREATORS     ---------------- */

//gets player info by username then finds or create in db
export const fetchUser = username => dispatch => {

  axios.get(`/api/playerInfo/player/${username}`)
    .then(res => res.data)
    .then(user => dispatch(getUser(user)))
    // .then(res => {
    //   axios.post(`api/playerInfo/player/${res.user.name}`, res.user)
    //     .then(res => res.data)
    //     .then(userInfo => dispatch(saveUser(userInfo)))
    //   return res.user
    // })
    // .then(user => {
    //   axios.get(`api/playerInfo/recent/${user.accountId}`)
    //     .then(games => games.data)
    //     .then(games => dispatch(getRecent(games)))
    //   return user
    // })
    // .then(user => {
    //   axios.get(`api/playerInfo/championMastery/${user.id}`)
    //     .then(res => res.data)
    //     .then(data => dispatch(getChampMastery(data)))
    //   return user
    // })
    // .then(user => {
    //   axios.get(`api/playerInfo/accountRunes/${user.id}`)
    //     .then(res => res.data)
    //     .then(data => dispatch(getRunePages(data)))
    //   return user
    // })
    // .then(user => {
    //   axios.get(`api/playerInfo/accountMasteries/${user.id}`)
    //     .then(res => res.data)
    //     .then(data => dispatch(getMasteries(data)))
    //   return user
    // })
    .catch(err => console.error(err))
}
export const fetchRecent = accountId => dispatch => {
  axios.get(`api/playerInfo/recent/${accountId}`)
    .then(games => games.data)
    .then(games => dispatch(getRecent(games)))
    .catch(err => console.error(err))
}

/* -----------------    REDUCER    -------------------- */


export default function userReducer(user = {}, action) {
  let obj = Object.assign(user)
  switch (action.type) {
    case GET_USER:
      return action.user
    case SAVE_USER:
      return action.userInfo
    case GET_GAMES:
      obj.recentGames = action.games
      return obj
    // case GET_CHAMPION_MASTERY:
    //   obj.champMastery = action.champMastery
    //   return obj
    // case GET_RUNE_PAGES:
    //   obj.runePages = action.runePages
    //   return obj
    // case GET_MASTERIES:
    //   obj.masteries = action.masteries
    //   return obj
    default:
      return user;
  }
}
