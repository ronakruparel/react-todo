import { GET_TODOS, UPDATE_TODO, ADD_NEW_TODO } from "../constants";
const URL = "http://localhost:9000";

export const getBucketTodos = bucket_id => {
  return {
    type: GET_TODOS,
    promise: client => client.get(`${URL}/todo?bucket_id=${bucket_id}`)
  };
};

export const updateTodo = payload => {
  return {
    type: UPDATE_TODO,
    data: payload,
    promise: client => client.put(`${URL}/todo`, payload)
  };
};

export const addNewTodo = payload => {
  return {
    type: ADD_NEW_TODO,
    data: payload,
    promise: client => client.post(`${URL}/todo`, payload)
  };
};
