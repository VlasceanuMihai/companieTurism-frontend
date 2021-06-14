/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-dupe-keys */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import NavbarComponent from "../../menu/navbar/NavbarComponent";
import FlightAdminService from "../../../services/FlightAdminService";

const useStyles = makeStyles({
  paper: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  container: {
    width: "700px",
    height: "450px",
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
    left: "10px",
    bottom: "10px",
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

export default function RegistrationFlightComponent(props) {
  const classes = useStyles();
  let history = useHistory();
  const { getFlight, createFlight, updateFlight } = FlightAdminService();

  const [flightData, setFlightData] = useState({
    flightId: "",
    airportDeparture: "",
    dateOfDeparture: "",
    airportArrival: "",
    dateOfArrival: "",
    company: "",
    employeeCnp: "",
    employeeFullName: "",
  });
  const [isUpdatePage, setIsUpdatePage] = useState(false);

  // const initialState = {
  //   documentId: "",
  //   cnp: "",
  //   path: "",
  //   documentName: "",
  // };

  function handleChange(event) {
    event.preventDefault();

    setFlightData((flightData) => ({
      ...flightData,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Body: ", flightData);
    createFlight({
      cnp: flightData.employeeCnp,
      airportDeparture: flightData.airportDeparture,
      dateOfDeparture: flightData.dateOfDeparture,
      airportArrival: flightData.airportArrival,
      dateOfArrival: flightData.dateOfArrival,
      company: flightData.company,
    })
      .then((response) => {
        console.log("Flight was created successfully!");
        if (response.status === 200) {
          alert("Flight was created successfully!");
          history.push("/admin/flights");
          setFlightData({
            flightId: "",
            airportDeparture: "",
            dateOfDeparture: "",
            airportArrival: "",
            dateOfArrival: "",
            company: "",
            employeeCnp: "",
            employeeFullName: "",
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

    console.log(flightData.flightId);
    updateFlight(flightData.flightId, {
      airportDeparture: flightData.airportDeparture,
      dateOfDeparture: flightData.dateOfDeparture,
      airportArrival: flightData.airportArrival,
      dateOfArrival: flightData.dateOfArrival,
      company: flightData.company,
    })
      .then((response) => {
        console.log("Flight updated!");
        if (response.status === 200) {
          alert("Flight updated!");
          history.push("/admin/flights");
          setFlightData({
            flightId: "",
            airportDeparture: "",
            dateOfDeparture: "",
            airportArrival: "",
            dateOfArrival: "",
            company: "",
            employeeCnp: "",
            employeeFullName: "",
          });
        }
      })
      .catch((error) => {
        console.log("Error: ", error.response.data.message);
        alert("Error: " + error.response.data.message);
      });
  };

  const findFlightById = (flightId) => {
    getFlight(flightId)
      .then((response) => {
        if (response.data != null) {
          //   console.log("Date: ", response.data.dateOfEmployment);
          setFlightData({
            flightId: response.data.id,
            airportDeparture: response.data.airportDeparture,
            dateOfDeparture: response.data.dateOfDeparture,
            airportArrival: response.data.airportArrival,
            dateOfArrival: response.data.dateOfArrival,
            company: response.data.company,
            employeeCnp: response.data.employee.employeeCnp,
            employeeFullName:
              response.data.employee.lastName +
              "" +
              response.data.employee.firstName,
          });
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  useEffect(() => {
    const flightId = +props.match.params.id;
    if (flightId) {
      setIsUpdatePage(true);
      findFlightById(flightId);
    }
  }, []);

  return (
    <div>
      <NavbarComponent />
      <div className={classes.paper}>
        <div className={classes.container}>
          <form>
            <div style={{ fontSize: "21px", marginTop: "5px" }}>
              Adaugare zbor
            </div>
            <br />
            {isUpdatePage === false && (
              <div class="form-group">
                <input
                  id="cnp"
                  name="cnp"
                  type="text"
                  class="form-control"
                  placeholder="CNP"
                  required
                  defaultValue={flightData.employeeCnp}
                  onChange={handleChange}
                />
              </div>
            )}
            <br />
            <div class="form-row">
              <div class="form-group col-md-5">
                <input
                  id="airportDeparture"
                  name="airportDeparture"
                  type="text"
                  class="form-control"
                  placeholder="Aeroport plecare"
                  required
                  defaultValue={flightData.airportDeparture}
                  onChange={handleChange}
                />
              </div>
              <form className={classes.container2} noValidate>
                <TextField
                  id="dateOfDeparture"
                  name="dateOfDeparture"
                  label="Data plecarii"
                  type="datetime-local"
                  required
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={flightData.dateOfDeparture}
                  onChange={handleChange}
                />
              </form>
            </div>
            <br />
            <div class="form-row">
              <div class="form-group col-md-5">
                <input
                  id="airportArrival"
                  name="airportArrival"
                  type="text"
                  class="form-control"
                  placeholder="Aeroport sosire"
                  required
                  defaultValue={flightData.airportArrival}
                  onChange={handleChange}
                />
              </div>
              <form className={classes.container2} noValidate>
                <TextField
                  id="dateOfArrival"
                  name="dateOfArrival"
                  label="Data sosirii"
                  type="datetime-local"
                  required
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={flightData.dateOfArrival}
                  onChange={handleChange}
                />
              </form>
            </div>
            <br />
            <div class="form-group">
              <input
                id="company"
                name="company"
                type="text"
                class="form-control"
                placeholder="Companie"
                required
                defaultValue={flightData.company}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              style={{
                background: "linear-gradient(45deg, #F1CDB9 10%, #b6aeab 90%)",
                border: "none",
              }}
              onClick={flightData.flightId ? handleUpdate : handleSubmit}
            >
              {flightData.flightId ? "Actualizare zbor" : "Adauga zbor nou"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
