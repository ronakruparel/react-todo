import { combineReducers } from "redux";
import { default as auth } from "./auth";
import { default as todo } from "./todo";
export default combineReducers({ auth, todo });
