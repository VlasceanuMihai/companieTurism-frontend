export const SET_PROFILE = "SET_PROFILE";
export const LOGOUT = "LOGOUT";

export function setProfile(data) {
  return {
    type: SET_PROFILE,
    lastName: data.lastName,
    firstName: data.firstName,
    cnp: data.cnp,
    phoneNumber: data.phoneNumber,
    email: data.email,
    dateOfEmployment: data.dateOfEmployment,
    employeeType: data.employeeType,
    wage: data.wage,
    role: data.role,
    createdAt: data.createdAt,
  };
}

export const logoutReset = () => {
  return {
    type: LOGOUT,
  };
};
