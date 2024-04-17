import  userReducer  from "./user/reducer/Reducer";
import { combineReducers } from "redux";

let rootReducer = combineReducers({
    userReducer,
});


export default rootReducer;