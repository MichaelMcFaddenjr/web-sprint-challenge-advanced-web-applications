import { axiosWithAuth } from './axiosWithAuth';

const fetchBubbles = () => {
  return axiosWithAuth()
    .get()
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((err) => console.log(err));
};

export default fetchBubbles;
