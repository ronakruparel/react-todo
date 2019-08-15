import { GET_BUCKETS } from "../constants";
const initialState = {
  loading: false,
  loaded: false,
  buckets: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BUCKETS: {
      console.log(action);
      return { ...state };
    }
    default:
      return { ...state };
  }
};
