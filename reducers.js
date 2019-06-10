import { combineReducers } from "redux";
import comments from "./comments";
import users from "./users";
// ------ imports ----------------------------

// ----- combine reducers - Redux way to bring smaller reducers together
const app = combineReducers({
  comments,
  users
});
