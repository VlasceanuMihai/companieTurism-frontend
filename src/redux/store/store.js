import { createStore } from "redux";
import employeeReducers from "../../redux/reducers/employeeReducers";

// const rootReducer = combineReducers({ employeeReducers});

export default createStore(employeeReducers);
