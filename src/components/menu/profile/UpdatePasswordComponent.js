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
    width: "400px",
    position: "relative",
    top: '50px'
  },
  paper:{
    display:'flex',
    justifyContent:'center',
  },
  cardStyle:{
    background: "linear-gradient(120deg, #BFADA9, #F0E2DD 40%, #ffffff)"
  },
  btnStyle:{
    background: "linear-gradient(45deg, #F1CDB9 10%, #b6aeab 90%)"
  },
  inputColor:{
    backgroundColor:"white",
  }
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
    <paper className={classes.paper}>
    <form className={clsx(classes.root)} >
      <Card className={classes.cardStyle}>
        <CardHeader title="Change Password" />
        <Divider />
        <CardContent >
          <TextField
            className={classes.inputColor}
            fullWidth
            id="oldPassword"
            name="oldPassword"
            type="input"
            label="Current Password"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            value={passwordData.password || ""}
          />
          <TextField
            className={classes.inputColor}
            fullWidth
            id="newPassword"
            name="newPassword"
            type="input"
            label="New Password"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            value={passwordData.password || ""}
          />
          <TextField
            className={classes.inputColor}
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            type="input"
            label="Confirm Password"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            value={passwordData.confirmPassword || ""}
          />
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button className={classes.btnStyle} color="primary" variant="contained" onClick={handleSubmit}>
            Confirm
          </Button>
        </Box>
      </Card>
    </form>
    </paper>
  );
}

export default UpdatePasswordComponent;
