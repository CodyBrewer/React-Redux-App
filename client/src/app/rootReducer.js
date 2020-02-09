import { combineReducers } from "redux";
// import reducers from "../store/reducers/";
import classReducer from "../store/reducers/classReducer";
import characterReducer from "../store/reducers/characterReducer";
import raceReducer from "../store/reducers/raceReducer";

export default combineReducers({
  // add & describe reducers here
  classes: classReducer,
  character: characterReducer,
  races: raceReducer
});
