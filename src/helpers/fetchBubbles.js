import { axiosWithAuth } from './axiosWithAuth';

const fetchBubbles = () => {
  return axiosWithAuth
    .get()
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export default fetchBubbles;
