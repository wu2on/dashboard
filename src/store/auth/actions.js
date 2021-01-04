import { SIGN_IN } from "./actionTypes";
import { LOG_OUT } from "./actionTypes";

export const signIn = ({ user }) => {
  return {
    type: SIGN_IN,
    ...user,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};
