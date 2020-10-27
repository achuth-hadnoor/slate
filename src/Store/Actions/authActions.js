import { LOGIN_USER, REGISTER_USER } from "../constants";

export const loginUserAction = () => {
  return {
    type: LOGIN_USER 
  }
};

export const registerUserAction = (user) => {
  return {
    type: REGISTER_USER,
    user
  }
};