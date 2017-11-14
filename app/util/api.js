import axios from 'axios';

const postUser = (user) => {
  axios.post(`api/playerInfo/player/${user.name}`, user);
};

export const saveToStorage = (key, value) => {
  const myStorage = window.localStorage;
  const dataObj = Object.assign({ time: new Date().getTime() }, { [key]: value });
  myStorage.setItem(key, JSON.stringify(dataObj));
};

export default postUser;

