import { SET_PROFILE, LOGOUT } from "../actions/actions";

const initialState = {
  employeeProfile: {},
  loggedIn: true,
  isAdmin: false,
};

const employeeReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      if (action.data === undefined) {
        action.data = {};
      }
      return {
        employeeProfile: {
          lastName: action.lastName,
          firstName: action.firstName,
          cnp: action.cnp,
          phoneNumber: action.phoneNumber,
          email: action.email,
          dateOfEmployment: action.dateOfEmployment,
          employeeType: action.employeeType,
          wage: action.wage,
          role: action.role,
          createdAt: action.createdAt,
        },
        loggedIn: true,
        isAdmin: action.role === "ROLE_ADMIN"
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default employeeReducers;
