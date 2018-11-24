import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { qodReducer } from "../reducers/reducers";

export default () => {
  const loggerMiddleware = createLogger();
  const store = createStore(
    qodReducer,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    )
  );
  return store;
};
