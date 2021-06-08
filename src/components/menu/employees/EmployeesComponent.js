/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AdminService from "../../../services/AdminService";
import NavbarComponent from "../navbar/NavbarComponent";
import TableComponent from "./TableEmployeesComponent";
import AddButtonComponent from "../buttons/AddButtonComponent";

function EmployeesComponent() {
  const { getAllEmployees } = AdminService();
  const [employees, setEmployees] = useState(null);
  const [employeesError, setEmployeesError] = useState(null);

  useEffect(() => {
    // let params = {};
    // params["page"] = 0;
    // params["size"] = 4;

    getAllEmployees()
      .then((response) => {
        console.log(response.data);
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
        setEmployeesError(error.response);
      });
  }, []);

  return (
    <div>
      <NavbarComponent />
      {<AddButtonComponent name={"Adaugare angajat"} />}
      {employeesError !== null && <div>{employeesError}</div>}
      {employees && <TableComponent employees={employees} />}
    </div>
  );
}

export default EmployeesComponent;
