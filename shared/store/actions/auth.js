import { LOGIN_USER } from "../constants";
const URL = "http://localhost:9000";
export const login = payload => {
  return {
    type: LOGIN_USER,
    promise: client => client.post(`${URL}/login`, payload)
  };
};
