/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-dupe-keys */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NavbarComponent from "../../menu/navbar/NavbarComponent";
import HotelAdminService from "../../../services/HotelAdminService";

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
    left: "100px",
    // bottom: "12px",
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

export default function RegistrationHotelComponent(props) {
  const classes = useStyles();
  let history = useHistory();
  const { getHotel, createHotel, updateHotel } = HotelAdminService();

  const [hotelData, setHotelData] = useState({
    hotelId: "",
    hotelName: "",
    rating: "",
    destinationCountry: "",
    destinationCity: "",
    covidScenario: "",
    cnp: "",
  });
  const [isUpdatePage, setIsUpdatePage] = useState(false);

  //   const initialState = {
  //     hotelId: "",
  //     hotelName: "",
  //     rating: "",
  //     destinationCountry: "",
  //     destinationCity: "",
  //     covidScenario: "",
  //     employeeCnp: "",
  //   };

  function handleChange(event) {
    event.preventDefault();

    setHotelData((hotelData) => ({
      ...hotelData,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Body: ", hotelData);
    createHotel({
      cnp: hotelData.cnp,
      hotelName: hotelData.hotelName,
      rating: hotelData.rating,
      destination: {
        country: hotelData.destinationCountry,
        city: hotelData.destinationCity,
        covidScenario: hotelData.covidScenario,
      },
    })
      .then((response) => {
        console.log("Hotel was created successfully!");
        if (response.status === 200) {
          alert("Hotel was created successfully!");
          history.push("/admin/hotels");
          setHotelData({
            hotelId: "",
            hotelName: "",
            rating: "",
            destinationCountry: "",
            destinationCity: "",
            covidScenario: "",
            cnp: "",
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

    console.log(hotelData.hotelId);
    updateHotel(hotelData.hotelId, {
      hotelName: hotelData.hotelName,
      rating: hotelData.rating,
      destination: {
        country: hotelData.destinationCountry,
        city: hotelData.destinationCity,
        covidScenario: hotelData.covidScenario,
      },
    })
      .then((response) => {
        console.log("Hotel updated successfully!");
        if (response.status === 200) {
          alert("Hotel updated successfully!");
          history.push("/admin/hotels");
          setHotelData({
            hotelId: "",
            hotelName: "",
            rating: "",
            destinationCountry: "",
            destinationCity: "",
            covidScenario: "",
            cnp: "",
          });
        }
      })
      .catch((error) => {
        console.log("Error: ", error.response.data.message);
        alert("Error: " + error.response.data.message);
      });
  };

  const findHotelById = (hotelId) => {
    getHotel(hotelId)
      .then((response) => {
        if (response.data !== null) {
          //   console.log("Date: ", response.data.dateOfEmployment);
          setHotelData({
            hotelId: response.data.id,
            hotelName: response.data.name,
            rating: response.data.rating,
            destinationCountry: response.data.destination.country,
            destinationCity: response.data.destination.city,
            covidScenario: response.data.destination.covidScenario,
            cnp: response.data.destination.employee.cnp,
          });
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  useEffect(() => {
    const hotelId = +props.match.params.id;
    if (hotelId) {
      setIsUpdatePage(true);
      findHotelById(hotelId);
    }
  }, []);

  return (
    <div>
      <NavbarComponent />
      <div className={classes.paper}>
        <div className={classes.container}>
          <form>
            <div style={{ fontSize: "21px", marginTop: "5px" }}>
              Adaugare hotel
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
                  defaultValue={hotelData.cnp}
                  onChange={handleChange}
                />
              </div>
            )}
            <br />
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  id="hotelName"
                  name="hotelName"
                  type="text"
                  class="form-control"
                  placeholder="Hotel"
                  required
                  defaultValue={hotelData.hotelName}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-md-6">
                <FormControl className={classes.formControl}>
                  <Select
                    name="rating"
                    value={hotelData.rating}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="" disabled>
                      Stele
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            {/* <br /> */}
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  id="destinationCountry"
                  name="destinationCountry"
                  type="text"
                  class="form-control"
                  placeholder="Tara"
                  required
                  defaultValue={hotelData.destinationCountry}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  id="destinationCity"
                  name="destinationCity"
                  type="text"
                  class="form-control"
                  placeholder="Oras"
                  required
                  defaultValue={hotelData.destinationCity}
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <div class="form-group col-md-6">
              <FormControl className={classes.formControl}>
                <Select
                  name="covidScenario"
                  value={hotelData.covidScenario}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="" disabled>
                    Scenariu covid
                  </MenuItem>
                  <MenuItem value={"SAFE"}>SAFE</MenuItem>
                  <MenuItem value={"RED_SCENARIO"}>RED_SCENARIO</MenuItem>
                  <MenuItem value={"TOTAL_QUARANTINE"}>TOTAL_QUARANTINE</MenuItem>
                </Select>
              </FormControl>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              style={{
                background: "linear-gradient(45deg, #F1CDB9 10%, #b6aeab 90%)",
                border: "none",
              }}
              onClick={isUpdatePage ? handleUpdate : handleSubmit}
            >
              {isUpdatePage ? "Actualizare hotel" : "Adauga hotel nou"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
