/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import FlightAdminService from "../../../services/FlightAdminService";
import NavbarComponent from "../navbar/NavbarComponent";
import TableFlightsComponent from "./TableFlightsComponent";
import AddButtonComponent from "../buttons/AddButtonComponent";

function FlightsComponent() {
  const { getAllFlights } = FlightAdminService();
  const [flights, setFlights] = useState(null);
  const [flightsError, setFlightsError] = useState(null);

  useEffect(() => {
    getAllFlights()
      .then((response) => {
        console.log(response.data);
        setFlights(response.data);
      })
      .catch((error) => {
        console.log(error);
        setFlightsError(error);
      });
  }, []);

  return (
    <div>
      <NavbarComponent />
      {
        <AddButtonComponent
          name={"Adaugare zbor"}
          path={"/admin/flights/form"}
        />
      }
      {flightsError !== null && <div>{flightsError}</div>}
      {flights && <TableFlightsComponent data={flights} />}
    </div>
  );
}

export default FlightsComponent;
