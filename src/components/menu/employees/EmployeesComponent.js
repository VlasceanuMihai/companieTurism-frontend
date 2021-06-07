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
    let params = {};
    params["page"] = 0;
    params["size"] = 4;

    getEmployees(params)
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
      {<TableComponent employees={employees} />}
    </div>
  );
}

export default EmployeesComponent;
