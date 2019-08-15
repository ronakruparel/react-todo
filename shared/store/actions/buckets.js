import { GET_BUCKETS, ADD_NEW_BUCKET } from "../constants";
const URL = "http://localhost:9000";

export const getBuckets = () => {
  return {
    type: GET_BUCKETS,
    promise: client => client.get(`${URL}/bucket`)
  };
};

export const addNewBucket = payload => {
  return {
    type: ADD_NEW_BUCKET,
    data: payload,
    promise: client => client.post(`${URL}/bucket`, payload)
  };
};
