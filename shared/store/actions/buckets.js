import { GET_BUCKETS, ADD_NEW_BUCKET } from "../constants";

import environments from "../../../environments";
export const getBuckets = () => {
  return {
    type: GET_BUCKETS,
    promise: client => client.get(`${environments.URL}/bucket`)
  };
};

export const addNewBucket = payload => {
  return {
    type: ADD_NEW_BUCKET,
    data: payload,
    promise: client => client.post(`${environments.URL}/bucket`, payload)
  };
};
