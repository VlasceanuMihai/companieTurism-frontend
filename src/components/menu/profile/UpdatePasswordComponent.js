/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
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
import { updatePasswordApi } from "../../../api/userApi/UserApi";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
});

function UpdatePasswordComponent() {
  const classes = useStyles();
  const { updatePassword } = EmployeeService();
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  function handleChange(event) {
    event.preventDefault();

    setPasswordData({
      ...passwordData,
      [event.target.name]: [event.target.value],
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    updatePassword({
      currentPassword: passwordData.currentPassword,
      newPassword: passwordData.newPassword,
      confirmNewPassword: passwordData.confirmNewPassword,
    });

    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  }

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
