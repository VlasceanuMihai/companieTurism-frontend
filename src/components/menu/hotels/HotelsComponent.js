/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AdminService from "../../../services/AdminService";
import NavbarComponent from "../navbar/NavbarComponent";
import TableHotelsComponent from "./TableHotelsComponent";
import AddButtonComponent from "../buttons/AddButtonComponent";

function HotelsComponent() {
  const { getAllHotels } = AdminService();
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

  return(
    <div>
    <NavbarComponent />
    {<AddButtonComponent name={"Adaugare hotel"} />}
    {hotelsError !== null && <div>{hotelsError}</div>}
    {hotels && <TableHotelsComponent data={hotels} />}
  </div>
  )
}

export default HotelsComponent;
