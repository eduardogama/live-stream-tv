import { call } from "redux-saga/effects";


export function* loginUser(action) {
  
  return yield call(router, roles);
}

// Little helper function to abstract going to different pages
function* router(roles) {
    switch(roles[0].id) {
      case "PROVIDER":
        return yield put(push("/provider"));
      case "PARTICIPANT"
        return yield put(push("/participant"))
      default:
        return yield put(push(`/channel`));
    }
}
