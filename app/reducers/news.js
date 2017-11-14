import axios from 'axios';

const myStorage = window.localStorage;
const currentTime = new Date().getTime();
const allNews = myStorage.getItem('news');
const storage = JSON.parse(allNews);
// timeDifference is represented in hours
const timeDifference = storage ?
  ((currentTime - storage.time) / 1000 / 60 / 60) : 0;

const saveNews = (news) => {
  const newsObj = { time: new Date().getTime(), articles: news.data };
  myStorage.setItem('news', JSON.stringify(newsObj));
};

/* -----------------    ACTIONS    -------------------- */

const GET_NEWS = 'GET_NEWS';

/* -------------    ACTION CREATORS    ---------------- */

const getNews = news => ({ type: GET_NEWS, news });

/* -------------    THUNK CREATORS     ---------------- */

export const fetchNews = () => (dispatch) => {
  if (!allNews || timeDifference > 3) {
    axios.get('/api/riotScraper/news')
      .then((news) => {
        saveNews(news);
        return news.data;
      })
      .then(news => dispatch(getNews(news)))
      .catch(err => console.error(err));
  } else {
    dispatch(getNews(storage.articles));
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
