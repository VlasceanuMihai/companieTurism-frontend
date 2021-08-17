/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import NavbarComponent from "../navbar/NavbarComponent";
import UpdatePasswordComponent from "./UpdatePasswordComponent";
import EmployeeService from "../../../services/EmployeeService";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
}));

function ProfileComponent() {
  const classes = useStyles();
  const { getProfile } = EmployeeService();
  const [profileError, setProfileError] = useState(null);
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cnp: "",
    dateOfEmployment: "",
    employeeType: "",
  });

  useEffect(() => {
    getProfile()
      .then((response) => {
        console.log("Profile" + response.data);
        setProfileData({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          phoneNumber: response.data.phoneNumber,
          cnp: response.data.cnp,
          dateOfEmployment: response.data.dateOfEmployment,
          employeeType: response.data.employeeType,
        });
      })
      .catch((error) => {
        console.log(error);
        setProfileError(error.response);
      });
  }, []);

  return (
    <div>
      <NavbarComponent />
      <Container maxWidth="lg">
        <Box mt={3}>
          <UpdatePasswordComponent />
        </Box>
      </Container>
    </div>
  );
}

export default ProfileComponent;
