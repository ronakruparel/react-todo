import { combineReducers } from "redux";
import { default as auth } from "./auth";
import { default as todo } from "./todo";
import { default as buckets } from "./buckets";
export default combineReducers({ auth, todo, buckets });
