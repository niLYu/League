import axios from 'axios';

const postUser = (user) => {
  axios.post(`api/playerInfo/player/${user.name}`, user);
};

export const saveToStorage = (data) => {
  const myStorage = window.localStorage;
  const dataObj = Object.assign({ time: new Date().getTime() }, data);
  myStorage.setItem('news', JSON.stringify(dataObj));
};

export default postUser;

