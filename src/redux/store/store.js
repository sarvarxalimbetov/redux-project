import { createStore } from "redux";
import { requestReducer } from "../reducers/reduce";

const store = createStore(
  requestReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store
