import { all, takeLatest } from "redux-saga/effects";
import { Types as providerTypes } from "../duck/userReducer";
import {
  loginProvider,
} from "./providerSagas";


export default function* rootSagas() {
  return yield all([
    takeLatest(userTypes.LOGIN_PROVIDER_SAGA, loginProvider),
  ]);
}
