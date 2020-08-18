import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from "immer-reducer";
import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";

export interface AppState {
  isMobile: boolean;
}

export const appInitialState: AppState = {
  isMobile: false,
};

export class AppReducer extends ImmerReducer<AppState> {
  public setMobile(payload: boolean) {
    this.draftState.isMobile = payload;
  }
}

const innerAppReducer = createReducerFunction(AppReducer, appInitialState);

export function appReducer(
  state: AppState = appInitialState,
  action: AnyAction
): AppState {
  if (action.type === HYDRATE) {
    return {
      isMobile: action.payload,
    };
  }
  return innerAppReducer(state, action as any);
}

export const appActions = createActionCreators(AppReducer);
