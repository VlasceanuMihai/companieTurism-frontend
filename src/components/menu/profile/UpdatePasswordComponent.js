/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { setProfile } from "../../../redux/actions/actions";
import clsx from "clsx";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@material-ui/core";
import EmployeeService from "../../../services/EmployeeService";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
});

function UpdatePasswordComponent() {
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
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  function handleChange(event) {
    setPasswordData({
      ...passwordData,
      [event.target.name]: [event.target.value],
    });
  }

  function handleSubmit(event) {
    setPasswordData({});
  }

  useEffect(() => {
    getProfile()
      .then((response) => {
        console.log("Profile" + response.data);
        setProfile({
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
      });
  }, []);

  return (
    <form className={clsx(classes.root)}>
      <Card>
        <CardHeader title="Update password" />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            id="password"
            name="password"
            type="password"
            label="Password"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            value={passwordData.password || ""}
          />
          <TextField
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm password"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            value={passwordData.confirmPassword || ""}
          />
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
}

export default UpdatePasswordComponent;
