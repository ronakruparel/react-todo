import { GET_BUCKETS } from "../constants";
const URL = "http://localhost:9000";

export const getBuckets = () => {
  return {
    type: GET_BUCKETS,
    promise: client => client.get(`${URL}/bucket`)
  };
};
