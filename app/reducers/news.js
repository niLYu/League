import axios from 'axios';
import { saveToStorage } from '../util/api';

/* -----------------    ACTIONS    -------------------- */

const GET_NEWS = 'GET_NEWS';

/* -------------    ACTION CREATORS    ---------------- */

const getNews = news => ({ type: GET_NEWS, news });

/* -------------    THUNK CREATORS     ---------------- */

export const fetchNews = () => dispatch => axios.get('/api/news')
  .then(res => res.data)
  .then((news) => {
    saveToStorage('news', news);
    dispatch(getNews(news));
  })
  .catch(err => console.error(err));

export const fetchNewsFromStorage = (news, expiration) => (dispatch) => {
  const deserialized = JSON.parse(window.localStorage.getItem(news));
  if (!deserialized) return;
  // time difference of date stored vs current date in hours
  const timeInStorage = (new Date().getTime() - deserialized.time) / 1000 / 60 / 60;
  // need to check against undefined incase 0 is passed in for expiration
  if (expiration === undefined || timeInStorage < expiration) {
    dispatch(getNews(deserialized.news));
  }
};

/* -----------------    REDUCER    -------------------- */

export default function newsReducer(state = [], action) {
  switch (action.type) {
    case GET_NEWS:
      return action.news;
    default:
      return state;
  }
}
