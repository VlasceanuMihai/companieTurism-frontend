import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import SettingsIcon from "@material-ui/icons/Settings";
import EditIcon from "@material-ui/icons/Edit";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  paper: {
    position: "relative",
    top: 160,
  },
  SettingsIcon: {
    position: "relative",
    top: 3,
  },
  tablerow: {
    backgroundColor: "#948e8c",
    color: "white",
  },
});

const BasicTable = ({ className, employees, ...rest }) => {
  const classes = useStyles();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.tablerow}>
            <TableCell>ID</TableCell>
            <TableCell align="center">Nume</TableCell>
            <TableCell align="center">Prenume</TableCell>
            <TableCell align="center">CNP</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center"># Telefon</TableCell>
            <TableCell align="center">Tip Contract</TableCell>
            <TableCell align="center">Data Angajarii</TableCell>
            <TableCell align="center">Salariu</TableCell>
            <TableCell align="center">
              <SettingsIcon className={classes.SettingsIcon}></SettingsIcon>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow hover key={employee.id}>
              <TableCell component="th" scope="row">
                {employee.id}
              </TableCell>
              <TableCell align="center">{employee.lastName}</TableCell>
              <TableCell align="center">{employee.firstName}</TableCell>
              <TableCell align="center">{employee.cnp}</TableCell>
              <TableCell align="center">{employee.email}</TableCell>
              <TableCell align="center">{employee.phoneNumber}</TableCell>
              <TableCell align="center">{employee.employeeType}</TableCell>
              <TableCell align="center">{employee.dateOfEmployment}</TableCell>
              <TableCell align="center">{employee.wage}</TableCell>
              <TableCell align="center">
                <EditIcon></EditIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={employees.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </TableContainer>
  );
};

BasicTable.propTypes = {
  employees: PropTypes.array.isRequired,
};

export default BasicTable;
