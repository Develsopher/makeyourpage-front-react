import axios from 'axios';

// if(localStorage.token){
//   headers.Authorization = 'Bearer'
// }
const baseURL = process.env.REACT_APP_BACK_API_URL;

console.log('BaseURL!!', baseURL);
const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
