import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@material-ui/core/";
import EmployeeService from "../../../services/EmployeeService";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "400px",
    position: "relative",
    top: "50px",
    margin: "0px 20px 0px 20px",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
  },
  cardStyle: {
    background: "linear-gradient(120deg, #BFADA9, #F0E2DD 40%, #ffffff)",
  },
  btnStyle: {
    background: "linear-gradient(45deg, #F1CDB9 10%, #b6aeab 90%)",
  },
  inputColor: {
    backgroundColor: "white",
  },
}));

function UserProfileComponent() {
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
      });
  }, []);

  return (
    <paper className={classes.paper}>
      <div>
        <form className={classes.root}>
          <Card className={classes.cardStyle}>
            <CardHeader title="Profil" />
            <Divider />
            <CardContent>
              <TextField
                className={classes.inputColor}
                fullWidth
                id="lastName"
                name="lastName"
                type="input"
                label="Nume"
                variant="outlined"
                margin="normal"
                value={profileData.lastName || ""}
                inputProps={{ readOnly: true }}
              />
              <TextField
                className={classes.inputColor}
                fullWidth
                id="firstName"
                name="firstName"
                type="input"
                label="Prenume"
                variant="outlined"
                margin="normal"
                value={profileData.firstName || ""}
                inputProps={{ readOnly: true }}
              />
              <TextField
                className={classes.inputColor}
                fullWidth
                id="email"
                name="email"
                type="email"
                label="Email"
                variant="outlined"
                margin="normal"
                value={profileData.email || ""}
                inputProps={{ readOnly: true }}
              />
              <TextField
                className={classes.inputColor}
                fullWidth
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                label="Telefon"
                variant="outlined"
                margin="normal"
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                value={profileData.phoneNumber || ""}
                inputProps={{ readOnly: true }}
              />
              <TextField
                className={classes.inputColor}
                fullWidth
                id="cnp"
                name="cnp"
                type="input"
                label="CNP"
                variant="outlined"
                margin="normal"
                maxlength="13"
                minlength="13"
                value={profileData.cnp || ""}
                inputProps={{ readOnly: true }}
                // oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              />
              <TextField
                className={classes.inputColor}
                fullWidth
                id="dateOfEmployment"
                name="dateOfEmployment"
                type="date"
                variant="outlined"
                margin="normal"
                value={profileData.dateOfEmployment || ""}
                inputProps={{ readOnly: true }}
              />
              <TextField
                className={classes.inputColor}
                fullWidth
                id="employeeType"
                name="employeeType"
                type="input"
                label="Tip angajat"
                variant="outlined"
                margin="normal"
                value={profileData.employeeType || ""}
                inputProps={{ readOnly: true }}
              />
            </CardContent>
            {/* <Divider />
            <Box display="flex" justifyContent="flex-end" p={2}>
              <Button
                className={classes.btnStyle}
                color="primary"
                variant="contained"
                // onClick={handleSubmit}
              >
                Actualizare
              </Button>
            </Box> */}
          </Card>
        </form>
      </div>
    </paper>
  );
}

export default UserProfileComponent;
