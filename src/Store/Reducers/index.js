import { combineReducers } from "redux";
import {userReducer}   from "./userReducer";
import {authReducer}   from "./authReducer";

const rootReducer = combineReducers({
user: userReducer,
login:authReducer
})

export default rootReducer;