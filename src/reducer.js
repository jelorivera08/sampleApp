import { combineReducers } from "redux";
import { reducer as header } from "./Modules/Containers/Header/reducer";

const rootReducer = combineReducers({
  header: header
});

export default rootReducer;
