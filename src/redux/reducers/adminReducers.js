import { LOGOUT } from "../actions/adminActions";

const initialState = {
  loggedIn: true,
};

const adminReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default adminReducers;
