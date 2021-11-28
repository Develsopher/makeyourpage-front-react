import axiosInstance from 'api';
const USER_EMAIL = 'USER_EMAIL';
const LOGIN_USER = 'LOGIN_USER';
const REGISTER_USER = 'REGISET_USER';

export const registerUser = (dataToSubmit) => {
  const request = axiosInstance
    .post('/subscription/signup', dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
};

export const setUserEmail = (userEmail) => ({
  type: USER_EMAIL,
  userEmail,
});

const initialState = {
  userEmail: '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_EMAIL:
      return {
        ...state,
        userEmail: action.userEmail,
      };
    case REGISTER_USER:
      return {
        ...state,
        register: action.payload,
      };
    default:
      return state;
  }
}
