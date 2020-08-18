import { combineReducers } from "redux";
import { appReducer } from "@/services/app";
export const rootReducers = combineReducers({ app: appReducer });
