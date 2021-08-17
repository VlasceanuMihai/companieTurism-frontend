/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles({
  root: {
    width: "400px",
    position: "relative",
    top: '50px',
    margin:"0px 20px 0px 20px"
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
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    updatePassword({
      currentPassword: passwordData.currentPassword,
      newPassword: passwordData.newPassword,
      confirmNewPassword: passwordData.confirmNewPassword,
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Password updated!");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  }

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
          id="outlined-basic"
          label="Nume"
          variant="outlined"
          margin="normal"
          type="input"
          />
          <TextField 
          className={classes.inputColor}
          fullWidth
          id="outlined-basic"
          label="Prenume"
          variant="outlined"
          margin="normal"
          type="input"
          />
          <TextField 
          className={classes.inputColor}
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
          />
          <TextField 
          className={classes.inputColor}
          fullWidth
          id="outlined-basic"
          label="Telefon"
          variant="outlined"
          margin="normal"
          type="tel" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
          />
          <TextField 
          className={classes.inputColor}
          fullWidth
          id="outlined-basic"
          label="CNP"
          variant="outlined"
          margin="normal"
          type="number" 
          maxlength="13"
          minlength="13"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          />
          <TextField 
          className={classes.inputColor}
          fullWidth
          id="outlined-basic"
          variant="outlined"
          margin="normal"
          type="date"
          />
          <TextField 
          className={classes.inputColor}
          fullWidth
          id="outlined-basic"
          label="Tip angajat"
          variant="outlined"
          margin="normal"
          type="input"
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
    </div>
    <form className={clsx(classes.root)} >
      <Card className={classes.cardStyle}>
        <CardHeader title="Change Password" />
        <Divider />
        <CardContent>
          <TextField
            className={classes.inputColor}
            fullWidth
            id="oldPassword"
            name="oldPassword"
            type="input"
            label="Parola Curenta"
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
            label="Parola Noua"
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
            label="Confirmare Parola"
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
=======
      <form className={clsx(classes.root)}>
        <Card className={classes.cardStyle}>
          <CardHeader title="Actualizare parola" />
          <Divider />
          <CardContent>
            <TextField
              className={classes.inputColor}
              fullWidth
              id="currentPassword"
              name="currentPassword"
              type="input"
              label="Parola curenta"
              margin="normal"
              variant="outlined"
              onChange={handleChange}
              value={passwordData.currentPassword || ""}
            />
            <TextField
              className={classes.inputColor}
              fullWidth
              id="newPassword"
              name="newPassword"
              type="input"
              label="Parola noua"
              margin="normal"
              variant="outlined"
              onChange={handleChange}
              value={passwordData.newPassword || ""}
            />
            <TextField
              className={classes.inputColor}
              fullWidth
              id="confirmNewPassword"
              name="confirmNewPassword"
              type="input"
              label="Confirmare parola noua"
              margin="normal"
              variant="outlined"
              onChange={handleChange}
              value={passwordData.confirmNewPassword || ""}
            />
          </CardContent>
          <Divider />
          <Box display="flex" justifyContent="flex-end" p={2}>
            <Button
              className={classes.btnStyle}
              color="primary"
              variant="contained"
              onClick={handleSubmit}
            >
              Actualizare
            </Button>
          </Box>
        </Card>
      </form>
    </paper>
  );
}

export default UpdatePasswordComponent;
