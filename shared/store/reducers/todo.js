const initialState = {
  loading: false,
  loaded: false,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
