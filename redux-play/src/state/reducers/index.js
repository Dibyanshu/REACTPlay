import { combineReducers } from "redux";
import accountReducre from "./accountReducer";

const reducers = combineReducers({
    account: accountReducre
});

export default reducers;