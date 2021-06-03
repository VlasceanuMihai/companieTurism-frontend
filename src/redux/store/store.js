import { createStore, combineReducers } from "redux";
import adminReducers from "../../redux/reducers/adminReducers";

const rootReducer = combineReducers({ adminReducers});

export default createStore(adminReducers);
