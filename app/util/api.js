import axios from 'axios';

const postUser = (user) => {
  axios.post(`api/playerInfo/player/${user.name}`, user);
};

export default postUser;
