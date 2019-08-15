import { LOGIN_USER } from "../constants";
import environments from "../../../environments";

export const login = payload => {
  return {
    type: LOGIN_USER,
    promise: client => client.post(`${environments.URL}/login`, payload)
  };
};
