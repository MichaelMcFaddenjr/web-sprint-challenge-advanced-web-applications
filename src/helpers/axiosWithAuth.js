import axios from "axios";


const token = localStorage.getItem('token');

export const axiosWithAuth = () => {
  
  return axios.create({
    baseURL: 'http://localhost:5000/api/colors',
    headers: {
      authorization: token,
    },
    
  })
}

//Task List:
//Build and export a function used to send in our authorization token