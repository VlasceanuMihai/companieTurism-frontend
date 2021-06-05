/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import NavbarComponent from "../navbar/NavbarComponent";
import TableComponent from "../table/TableComponent";
import AdminService from "../../../services/AdminService";

function EmployeesComponent() {
  const { getEmployees } = AdminService();
  const [employees, setEmployees] = useState(null);
  const [employeesError, setEmployeesError] = useState(null);

  useEffect(() => {
    getEmployees()
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
      {employeesError !== null && <div>{employeesError}</div>}
      {employees && <TableComponent employees={employees} />}
    </div>
  );
}

export default EmployeesComponent;
