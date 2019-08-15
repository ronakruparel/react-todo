import { GET_BUCKETS } from "../constants";
const initialState = {
  loading: false,
  loaded: false,
  buckets: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_BUCKETS}_REQUEST`: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case GET_BUCKETS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        buckets: action.payload
      };
    }
    default:
      return { ...state };
  }
};
