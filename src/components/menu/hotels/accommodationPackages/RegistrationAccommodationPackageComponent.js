/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-dupe-keys */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NavbarComponent from "../../navbar/NavbarComponent";
import HotelAdminService from "../../../../services/HotelAdminService";

const useStyles = makeStyles({
  paper: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  container: {
    width: "700px",
    height: "620px",
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

export default function RegistrationAccommodationPackageComponent(props) {
  const classes = useStyles();
  let history = useHistory();
  const { getHotel, generateTotalPrice, createAccommodationPackage } =
    HotelAdminService();

  const [accommodationData, setAccommodationData] = useState({
    packageType: "",
    pricePerNight: "",
    nightsNumber: "",
    roomsNumber: "",
    adultsNumber: "",
    kidsNumber: "",
    totalPrice: "",
    hotel: {
      id: "",
      name: "",
      rating: "",
      destinationCountry: "",
      destinationCity: "",
      covidScenario: "",
    },
    cnp: "",
  });
  const [isTotalPriceGenerated, setTotalPriceIsGenerated] = useState(false);

  //   const initialState = {
  // packageType: "",
  // pricePerNight: "",
  // nightsNumber: "",
  // roomsNumber: "",
  // adultsNumber: "",
  // kidsNumber: "",
  // totalPrice: "",
  // hotel: {
  //   hotelId: "",
  //   hotelName: "",
  //   rating: "",
  //   destinationCountry: "",
  //   destinationCity: "",
  //   covidScenario: "",
  //   };

  function handleChange(event) {
    event.preventDefault();

    setAccommodationData((accommodationData) => ({
      ...accommodationData,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    createAccommodationPackage(accommodationData.hotel.id, {
      packageType: accommodationData.packageType,
      pricePerNight: accommodationData.pricePerNight,
      nightsNumber: parseInt(accommodationData.nightsNumber),
      roomsNumber: parseInt(accommodationData.roomsNumber),
      adultsNumber: parseInt(accommodationData.adultsNumber),
      kidsNumber: parseInt(accommodationData.kidsNumber),
      totalPrice: parseInt(accommodationData.totalPrice),
    })
      .then((response) => {
        console.log(
          "Accommodation package has been added successfully for hotel " +
            accommodationData.hotel.name +
            "!"
        );
        if (response.status === 200) {
          alert(
            "Accommodation package has been added successfully for hotel " +
              accommodationData.hotel.name +
              "!"
          );
          history.push("/hotels");
          setAccommodationData({
            packageType: "",
            pricePerNight: "",
            nightsNumber: "",
            roomsNumber: "",
            adultsNumber: "",
            kidsNumber: "",
            totalPrice: "",
            hotel: {
              id: "",
              name: "",
              rating: "",
              destinationCountry: "",
              destinationCity: "",
              covidScenario: "",
            },
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
          setAccommodationData({
            hotel: {
              id: response.data.id,
              name: response.data.name,
              rating: response.data.rating,
              destinationCountry: response.data.destination.country,
              destinationCity: response.data.destination.city,
              covidScenario: response.data.destination.covidScenario,
            },
            cnp: response.data.destination.employee.cnp,
          });
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const calculateTotalPrice = (event) => {
    event.preventDefault();

    generateTotalPrice({
      packageType: accommodationData.packageType,
      pricePerNight: parseInt(accommodationData.pricePerNight),
      nightsNumber: parseInt(accommodationData.nightsNumber),
      roomsNumber: parseInt(accommodationData.roomsNumber),
      adultsNumber: parseInt(accommodationData.adultsNumber),
      kidsNumber: parseInt(accommodationData.kidsNumber),
    })
      .then((response) => {
        setAccommodationData({
          totalPrice: response.data.totalPrice,
          packageType: accommodationData.packageType,
          hotel: {
            id: accommodationData.hotel.id,
            name: accommodationData.hotel.name,
            rating: accommodationData.hotel.rating,
            destinationCountry: accommodationData.hotel.destinationCountry,
            destinationCity: accommodationData.hotel.destinationCity,
            covidScenario: accommodationData.hotel.covidScenario,
          },
          cnp: accommodationData.cnp,
        });
        if (response.status === 200) {
          setTotalPriceIsGenerated(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const hotelId = +props.match.params.id;

    if (hotelId) {
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
              Date pachet de cazare
            </div>
            <br />
            <div class="form-group">
              <input
                id="cnp"
                name="cnp"
                type="text"
                class="form-control"
                placeholder="CNP"
                required
                readOnly
                defaultValue={accommodationData.cnp}
                onChange={handleChange}
              />
            </div>
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
                  readOnly
                  defaultValue={accommodationData.hotel.name}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-md-6">
                <FormControl className={classes.formControl}>
                  <Select
                    name="rating"
                    value={accommodationData.hotel.rating}
                    onChange={handleChange}
                    displayEmpty
                    readOnly
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
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  id="destinationCountry"
                  name="destinationCountry"
                  type="text"
                  class="form-control"
                  placeholder="Tara"
                  required
                  readOnly
                  defaultValue={accommodationData.hotel.destinationCountry}
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
                  readOnly
                  defaultValue={accommodationData.hotel.destinationCity}
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  id="pricePerNight"
                  name="pricePerNight"
                  type="number"
                  class="form-control"
                  placeholder="Pret/noapte"
                  required
                  defaultValue={accommodationData.pricePerNight}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-md-6">
                <FormControl className={classes.formControl}>
                  <Select
                    name="packageType"
                    value={accommodationData.packageType}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="" disabled>
                      TipPachet
                    </MenuItem>
                    <MenuItem value={"STANDARD"}>STANDARD</MenuItem>
                    <MenuItem value={"PREMIUM"}>PREMIUM</MenuItem>
                    <MenuItem value={"VIP"}>VIP</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            {/* <br /> */}
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  id="nightsNumber"
                  name="nightsNumber"
                  type="number"
                  class="form-control"
                  placeholder="Nr. nopti"
                  required
                  defaultValue={accommodationData.nightsNumber}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  id="roomsNumber"
                  name="roomsNumber"
                  type="number"
                  class="form-control"
                  placeholder="Nr. camere"
                  required
                  defaultValue={accommodationData.roomsNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  id="adultsNumber"
                  name="adultsNumber"
                  type="number"
                  class="form-control"
                  placeholder="Nr. adulti"
                  required
                  defaultValue={accommodationData.adultsNumber}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  id="kidsNumber"
                  name="kidsNumber"
                  type="number"
                  class="form-control"
                  placeholder="Nr. copii"
                  required
                  defaultValue={accommodationData.kidsNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            {isTotalPriceGenerated === true && (
              <div class="form-group">
                <input
                  id="totalPrice"
                  name="totalPrice"
                  type="number"
                  // step="0.01"
                  class="form-control"
                  placeholder="Pret total"
                  required
                  readOnly
                  defaultValue={accommodationData.totalPrice}
                  onChange={handleChange}
                />
              </div>
            )}
            <br />
            <button
              type="submit"
              class="btn btn-primary"
              disabled={isTotalPriceGenerated === false}
              style={{
                background: "linear-gradient(45deg, #F1CDB9 10%, #b6aeab 90%)",
                border: "none",
              }}
              onClick={handleSubmit}
            >
              Adauga pachet cazare nou
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              style={{
                background: "linear-gradient(45deg, #F1CDB9 10%, #b6aeab 90%)",
                border: "none",
              }}
              onClick={calculateTotalPrice}
            >
              Calculare pret total
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
