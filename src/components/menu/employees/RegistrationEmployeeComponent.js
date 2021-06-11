/* eslint-disable no-dupe-keys */
import React, { useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
// import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NavbarComponent from "../../menu/navbar/NavbarComponent";
import AdminService from "../../../services/AdminService";

const useStyles = makeStyles({
  paper: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  container: {
    width: "700px",
    height: "600px",
    fontFamily: "roboto",
    backgroundColor: "white",
    position: "relative",
    top: "150px",
    borderRadius: "10px",
    backgroundColor: "rgba(241, 205, 185, 0.3)",
  },
  container2: {
    display: "flex",
    position: "relative",
    left: "50px",
  },
  formControl: {
    position: "relative",
    left: "230px",
    bottom: "32px",
  },
  button: {
    position: "relative",
    top: 80,
    marginRight: 10,
    float: "right",
    background: "linear-gradient(45deg, #F1CDB9 10%, #b6aeab 90%)",
    borderRadius: 5,
    border: 0,
    color: "black",
    height: 30,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px #989898",
    fontFamily: "roboto",
  },
});

export default function RegistrationEmployeeComponent() {
  const classes = useStyles();
  let history = useHistory();
  const { createEmployee } = AdminService();
  const [employeeData, setEmployeeData] = useState({
    lastName: "",
    firstName: "",
    cnp: "",
    phoneNumber: "",
    email: "",
    password: "",
    dateOfEmployment: "",
    employeeType: "SUCURSALA",
    wage: "",
  });

  function handleChange(event) {
    event.preventDefault();

    console.log(
      "Field: " + [event.target.name] + " -> value: " + event.target.value
    );
    setEmployeeData((employeeData) => ({
      ...employeeData,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Body: ", employeeData);
    createEmployee({
      lastName: employeeData.lastName,
      firstName: employeeData.firstName,
      cnp: employeeData.cnp,
      phoneNumber: employeeData.phoneNumber,
      email: employeeData.email,
      password: employeeData.password,
      dateOfEmployment: employeeData.dateOfEmployment,
      employeeType: employeeData.employeeType,
      wage: employeeData.wage,
    })
      .then((response) => {
        console.log("Create new employee with cnp: " + employeeData.cnp);
        if (response.status === 200) {
          alert("Create new employee with cnp: " + employeeData.cnp);
          history.push("/admin/employees");
          setEmployeeData({
            lastName: "",
            firstName: "",
            cnp: "",
            phoneNumber: "",
            email: "",
            password: "",
            dateOfEmployment: "",
            employeeType: "",
            wage: "",
          });
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
        alert("Error: ", error);
      });
  };

  return (
    <div>
      <NavbarComponent />
      <div className={classes.paper}>
        <div className={classes.container}>
          <form>
            <div>Date Angajat</div>
            <br />
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  type="text"
                  id="nume"
                  name="lastName"
                  class="form-control"
                  placeholder="Nume"
                  required
                  autoFocus
                  defaultValue={employeeData.lastName || ""}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  type="text"
                  id="prenume"
                  name="firstName"
                  class="form-control"
                  placeholder="Prenume"
                  required
                  defaultValue={employeeData.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  type="text"
                  id="cnp"
                  class="form-control"
                  placeholder="CNP"
                  name="cnp"
                  required
                  defaultValue={employeeData.cnp}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  type="tel"
                  id="numarTelefon"
                  class="form-control"
                  placeholder="Numar Telefon"
                  name="phoneNumber"
                  required
                  defaultValue={employeeData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <div class="form-group">
              <input
                type="email"
                id="email"
                class="form-control"
                placeholder="Email"
                name="email"
                required
                defaultValue={employeeData.email}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                id="password"
                class="form-control"
                placeholder="Parola"
                name="password"
                required
                defaultValue={employeeData.password}
                onChange={handleChange}
              />
            </div>
            <br />
            <form className={classes.container2} noValidate>
              <TextField
                id="date"
                label="Data Angajarii"
                type="date"
                name="dateOfEmployment"
                required
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={employeeData.dateOfEmployment}
                onChange={handleChange}
              />
            </form>
            <div>
              <FormControl className={classes.formControl}>
                <Select
                  defaultValue={employeeData.employeeType}
                  onChange={handleChange}
                  displayEmpty
                  name="employeeType"
                  className={classes.selectEmpty}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="" disabled>
                    Tip Contract Angajat
                  </MenuItem>
                  <MenuItem value={"SUCURSALA"}>SUCURSALA</MenuItem>
                  <MenuItem value={"TRAVEL_GUIDE"}>TRAVEL GUIDE</MenuItem>
                  <MenuItem value={"LEAD"}>LEAD</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div class="form-group">
              <input
                type="text"
                id="salariu"
                class="form-control"
                placeholder="Salariu Net"
                name="wage"
                required
                defaultValue={employeeData.wage}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              {/* <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Accept termenele si conditiile
              </label>
            </div> */}
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={handleSubmit}
            >
              Adauga angajat nou
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
