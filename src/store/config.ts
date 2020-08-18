import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Context, createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";

import { rootReducers } from "@/store/reducers";
import rootSaga from "@/store/sagas";

const makeStore = (_context: Context): Store => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducers,
    process.env.IS_PRODUCTION
      ? applyMiddleware(sagaMiddleware)
      : composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  (store as any).sagaTask = sagaMiddleware.run(rootSaga);
  return (store as unknown) as Store;
};

const wrapper = createWrapper(makeStore, { debug: false });

export default wrapper;
