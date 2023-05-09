import { SIGNUP_DATA, API_DATA } from "../Constant";

export const signupData = (data) => {
  return {
    type: SIGNUP_DATA,
    payload: data
  };
};

export const apiData = (data) => {
  return {
    type: API_DATA,
    payload: data,
  };
};
