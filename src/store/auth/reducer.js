import { SIGN_IN } from "./actionTypes";
import { LOG_OUT } from "./actionTypes";

const defaultState = {
  currentUser: {
    uid: null,
    email: null,
  },
  isAuth: false,
};

function signIn(state, action) {
  const { uid, email } = action;
  return {
    ...state,
    currentUser: {
      uid: uid,
      email: email,
    },
    isAuth: true,
  };
}

function logOut(state, action) {
  return {
    ...state,
    currentUser: {
      uid: null,
      email: null,
    },
    isAuth: false,
  };
}

export default function authReducer(state = defaultState, action) {
  switch (action.type) {
    case SIGN_IN:
      return signIn(state, action);
    case LOG_OUT:
      return logOut(state, action);
    default:
      return state;
  }
}
