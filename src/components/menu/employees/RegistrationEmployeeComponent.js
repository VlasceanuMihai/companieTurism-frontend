/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-dupe-keys */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
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
    width: "750px",
    height: "600px",
    fontFamily: "roboto",
    backgroundColor: "white",
    position: "relative",
    top: "150px",
    borderRadius: "10px",
    background: "linear-gradient(120deg, #BFADA9, #F0E2DD 40%, #ffffff)",
    boxShadow:
      "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    display: "flex",
    justifyContent: "center",
  },
  container2: {
    display: "flex",
    position: "relative",
    // left: "50px",
  },
  formControl: {
    position: "relative",
    left: "140px",
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

export default function RegistrationEmployeeComponent(props) {
  const classes = useStyles();
  let history = useHistory();
  const { getEmployee, createEmployee, updateEmployee } = AdminService();

  const [employeeData, setEmployeeData] = useState({
    id: "",
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
  const [showPasswordField, setShowPasswordField] = useState(true);

  function handleChange(event) {
    event.preventDefault();

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
        console.log("Error: ", error.response.data.message);
        alert("Error: " + error.response.data.message);
      });
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    console.log(employeeData.id);
    updateEmployee(employeeData.id, {
      lastName: employeeData.lastName,
      firstName: employeeData.firstName,
      cnp: employeeData.cnp,
      phoneNumber: employeeData.phoneNumber,
      email: employeeData.email,
      dateOfEmployment: employeeData.dateOfEmployment,
      employeeType: employeeData.employeeType,
      wage: employeeData.wage,
    })
      .then((response) => {
        console.log("Update employee with cnp: " + employeeData.cnp);
        if (response.status === 200) {
          alert("Update employee with cnp: " + employeeData.cnp);
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
        console.log("Error: ", error.response.data.message);
        alert("Error: " + error.response.data.message);
      });
  };

  const findEmployeeById = (employeeId) => {
    getEmployee(employeeId)
      .then((response) => {
        if (response.data != null) {
          console.log("Date: ", response.data.dateOfEmployment);
          console.log("Type: ", response.data.employeeType);
          setEmployeeData({
            id: response.data.id,
            lastName: response.data.lastName,
            firstName: response.data.firstName,
            cnp: response.data.cnp,
            phoneNumber: response.data.phoneNumber,
            email: response.data.email,
            // password: response.data.id,
            dateOfEmployment: response.data.dateOfEmployment,
            employeeType: response.data.employeeType,
            wage: response.data.wage,
          });
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  useEffect(() => {
    const employeeId = +props.match.params.id;
    if (employeeId) {
      setShowPasswordField(false);
      findEmployeeById(employeeId);
    }
  }, []);

  return (
    <div>
      <NavbarComponent />
      <div className={classes.paper}>
        <div className={classes.container}>
          <form>
            <div style={{ fontSize: "21px", marginTop: "5px" }}>
              Date Angajat
            </div>
            <br />
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  class="form-control"
                  placeholder="Nume"
                  required
                  autoFocus
                  autoComplete="off"
                  defaultValue={employeeData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  type="text"
                  id="firstName"
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
                  readOnly={showPasswordField === false}
                  defaultValue={employeeData.cnp}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  type="tel"
                  id="phoneNumber"
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
            {showPasswordField === true && (
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
            )}
            <br />
            <form className={classes.container2} noValidate>
              <TextField
                id="dateOfEmployment"
                label="Data Angajarii"
                type="date"
                name="dateOfEmployment"
                required
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                value={employeeData.dateOfEmployment}
                onChange={handleChange}
              />
            </form>
            <div>
              <FormControl className={classes.formControl}>
                <Select
                  value={employeeData.employeeType}
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
            <div
              class="form-row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div class="form-group col-8">
                <input
                  type="text"
                  id="wage"
                  class="form-control"
                  placeholder="Salariu"
                  name="wage"
                  required
                  defaultValue={employeeData.wage}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="form-group"></div>
            <button
              type="submit"
              class="btn btn-primary"
              style={{
                background: "linear-gradient(45deg, #F1CDB9 10%, #b6aeab 90%)",
                border: "none",
              }}
              onClick={employeeData.id ? handleUpdate : handleSubmit}
            >
              {employeeData.id ? "Actualizare angajat" : "Adauga angajat nou"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
