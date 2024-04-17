import { combineReducers } from "redux";
import  userReducer  from "./user/reducer/Reducer";

let rootReducer = combineReducers({
    userReducer
});

export default rootReducer;