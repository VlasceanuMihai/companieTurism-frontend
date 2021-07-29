/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import HotelAdminService from "../../../../services/HotelAdminService";
import NavbarComponent from "../../navbar/NavbarComponent";
import TableAccommodationPackagesComponent from "../accommodationPackages/TableAccommodationPackagesComponent";

function AccommodationPackagesComponent(props) {
  const { getAccommodationPackages } = HotelAdminService();
  const [accommodationPackages, setAccommodationPackages] = useState(null);
  const [accommodationPackagesError, setAccommodationPackagesError] =
    useState(null);

  const findAccommodationPackagesById = (hotelId) => {
    getAccommodationPackages(hotelId)
      .then((response) => {
        console.log(response.data);
        setAccommodationPackages(response.data);
      })
      .catch((error) => {
        console.log("Accommodation packages error: ", error);
        setAccommodationPackagesError(error);
      });
  };

  useEffect(() => {
    const hotelId = +props.match.params.id;
    if (hotelId) {
      findAccommodationPackagesById(hotelId);
    }
  }, []);

  return (
    <div>
      <NavbarComponent />
      {accommodationPackagesError !== null && (
        <div>{accommodationPackagesError}</div>
      )}
      {accommodationPackages && (
        <TableAccommodationPackagesComponent data={accommodationPackages} />
      )}
    </div>
  );
}

export default AccommodationPackagesComponent;
