import { combineReducers } from "redux";
import { default as auth } from "./auth";
import { default as buckets } from "./buckets";
import { default as todos } from "./todos";
export default combineReducers({ auth, todos, buckets });
