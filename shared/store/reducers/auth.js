import { LOGIN_USER } from "../constants";
const initialState = {
  loading: false,
  loaded: false,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      console.log(action);
      return { ...state };

    default:
      return { ...state };
  }
};
