import { LOGIN_USER, REGISTER_USER } from "../constants";

export const loginUserAction = (user) => {
  return {
    type: LOGIN_USER,
    user
  }
};

export const registerUserAction = (user) => {
  return {
    type: REGISTER_USER,
    user
  }
};