import counter from "./counter";
import logged from "./logged";
import { combineReducers } from "redux";

const reducers = combineReducers({
  counter,
  logged,
});

export default reducers;
