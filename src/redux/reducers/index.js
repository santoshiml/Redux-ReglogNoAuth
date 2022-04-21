import reducer from "./reducer";
import register from '../actions/action';
import login from '../actions/action';

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  reducer, 
  register,
  login

});

export default rootReducer;

