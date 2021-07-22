import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "../../routes/history";

import provider from "./providerReducer";



const appReducer = combineReducers({
  provider,
  router: connectRouter(history),
});

const rootReducer = (state, action) => {
  if (action.type === 'PROVIDER_LOGOUT') {
    state = undefined;
    console.log("Limpando reducer");
  }

  return appReducer(state, action)
}

export default rootReducer;
