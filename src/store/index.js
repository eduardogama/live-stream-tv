import { createStore, compose, applyMiddleware } from "redux";
import storeSynchronize from "redux-localstore";
import reducers from "./duck";
import sagas from "./sagas";
import createSaga from "redux-saga";
import { connectRouter, routerMiddleware } from "connected-react-router";
import history from "../routes/history";



//Create sagas middleware.
const sagaMiddleware = createSaga();

const middleware = [
  sagaMiddleware,
  routerMiddleware(history)
];

//Store
const store = createStore(
  connectRouter(history)(reducers),
  compose(applyMiddleware(...middleware))
);

//Sync with localstorage
storeSynchronize(store);

//Start Sagas
sagaMiddleware.run(sagas);

export default store;
