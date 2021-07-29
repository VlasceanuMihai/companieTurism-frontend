/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import HotelAdminService from "../../../services/HotelAdminService";
import NavbarComponent from "../navbar/NavbarComponent";
import TableHotelsComponent from "./TableHotelsComponent";
import AddButtonComponent from "../buttons/AddButtonComponent";

function HotelsComponent() {
  const { getAllHotels } = HotelAdminService();
  const [hotels, setHotels] = useState(null);
  const [hotelsError, setHotelsError] = useState(null);

  useEffect(() => {
    getAllHotels()
      .then((response) => {
        console.log(response.data);
        setHotels(response.data);
      })
      .catch((error) => {
        console.log(error);
        setHotelsError(error);
      });
  }, []);

  return (
    <div>
      <NavbarComponent />
        <AddButtonComponent
          name={"Adaugare hotel"}
          path={"/admin/hotel/form"}
        />
      {hotelsError !== null && <div>{hotelsError}</div>}
      {hotels && <TableHotelsComponent data={hotels} />}
    </div>
  );
}

export default HotelsComponent;
