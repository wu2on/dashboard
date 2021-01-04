import { auth } from "./firebase";

const queries = () => {
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const logout = () => {
    return auth.signOut();
  };

  return {
    signup,
    login,
    logout,
  };
};

export default queries;
