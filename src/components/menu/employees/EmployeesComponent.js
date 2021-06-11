/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AdminService from "../../../services/AdminService";
import NavbarComponent from "../navbar/NavbarComponent";
import TableEmployeesComponent from "./TableEmployeesComponent";
import AddButtonComponent from "../buttons/AddButtonComponent";

function EmployeesComponent() {
  const { getAllEmployees } = AdminService();
  const [employees, setEmployees] = useState(null);
  const [employeesError, setEmployeesError] = useState(null);

  useEffect(() => {
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
      {<AddButtonComponent name={"Adaugare angajat"} path={"/admin/employees/form"} />}
      {employeesError !== null && <div>{employeesError}</div>}
      {employees && <TableEmployeesComponent data={employees} />}
    </div>
  );
}

export default EmployeesComponent;
