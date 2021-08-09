/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FlightAdminService from "../../../services/FlightAdminService";
import NavbarComponent from "../navbar/NavbarComponent";
import TableFlightsComponent from "./TableFlightsComponent";
import AddButtonComponent from "../buttons/AddButtonComponent";

function FlightsComponent() {
  const profile = useSelector((state) => state.employeeProfile);
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
      {profile.role === "ROLE_ADMIN" && (
        <AddButtonComponent
          name={"Adaugare zbor"}
          path={"/admin/flights/form"}
        />
      )}
      {flightsError !== null && <div>{flightsError}</div>}
      {flights && <TableFlightsComponent data={flights} />}
    </div>
  );
}

export default FlightsComponent;
