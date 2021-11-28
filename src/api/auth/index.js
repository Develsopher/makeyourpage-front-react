import axiosInstance from 'api';

export const registerAPI = (body) => {
  axiosInstance
    .post('/subscription/signup', body)
    .then((res) => console.log('res', res))
    .catch((err) => console.log('e', err));
};
