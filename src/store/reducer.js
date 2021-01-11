import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import itemReducer from "./products/reducer";

const rootReducer = combineReducers({
  user: authReducer,
  item: itemReducer,
  form: formReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
