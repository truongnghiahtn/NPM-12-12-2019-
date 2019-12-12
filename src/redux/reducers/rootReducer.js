import { combineReducers } from "redux";
import khoaHocReducer from "./khoaHocReducer";
import formReducer from "./formReducer";

const rootReducer = combineReducers({
  khoaHocReducer,
  formReducer
});

export default rootReducer;
