import { combineReducers } from "redux";
import { AppReducer } from "../";

export const RootReducer = combineReducers({
  app: AppReducer,
});
