import { defineState } from "redux-localstore";

export const Types = {
    LOGIN_USER_SAGA: "user/LOGIN_USER_SAGA",
    USER_LOGOUT: "USER_LOGOUT",
    UPDATE_USER_SAGA: "user/UPDATE_USER_SAGA",
    ADD_USER: "user/ADD_USER",
    AUTH_USER_SUCCESS: "user/AUTH_USER_SUCCESS",
    AUTH_USER_FAILED: "user/AUTH_USER_FAILED",
    REMOVE_USER: "user/REMOVE_USER",
    UPDATE_USER: "user/UPDATE_USER",
    EDIT_USER: "user/EDIT_USER",
};

/**
 * Reducer
 */
const INITIAL_STATE = {
    isAuthenticated: false,
    edit: false,
    data: [],
};

const initialState = defineState(INITIAL_STATE)("user");


export default function user(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_USER:
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload.provider,
      };
    default:
      return state;
  }
}

export const Creators = {
  loginProvider: (email, password) => ({
    type: Types.LOGIN_USER_SAGA,
    payload: {
      email,
      password,
    },
  }),
  editProvider: () => ({
    type: Types.EDIT_USER,
  }),
};
