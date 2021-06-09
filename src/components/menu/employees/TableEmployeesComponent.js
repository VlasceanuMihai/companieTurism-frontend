import { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableFooter,
  Paper,
  IconButton,
  ButtonGroup,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
// import AdminService from "../../../services/AdminService";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

const useStylesPagination = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    fontFamily: "roboto",
  },
  paper: {
    position: "relative",
    top: 100,
  },
  SettingsIcon: {
    position: "relative",
    top: 3,
  },
  tablerow: {
    background: "linear-gradient(45deg, #F1CDB9 10%, #b6aeab 90%)",
  },
});

function TablePaginationActions(props) {
  const classes = useStylesPagination();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function TableEmployeesComponent({ employees, ...rest }) {
  const classes = useStyles();
  // const { getEmployees } = AdminService();
  // const [employeesData, setEmployeesData] = useState(employees);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // const lastIndex = currentPage * rowsPerPage;
  // const firstIndex = lastIndex - rowsPerPage;
  // const totalPages = employeesData / rowsPerPage;

  // const emptyRows =
  //   rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  // const getRequestParams = (pageParam, pageSizeParam) => {
  //   let params = {};

  //   if (pageParam) {
  //     params["page"] = pageParam - 1;
  //   }

  //   if (pageSizeParam) {
  //     params["size"] = pageSizeParam;
  //   }

  //   return params;
  // };

  // const getEmployeesBasedOnParams = () => {
  //   const params = getRequestParams(currentPage, rowsPerPage);
  //   console.log(params);

  //   getEmployees(params)
  //     .then((response) => {
  //       console.log("Employees: ", response.data);
  //       setEmployeesData(response.data);
  //       console.log("Total pages: ", response.data.totalPages);
  //     })
  //     .catch((error) => {
  //       console.log("Error: ", error);
  //     });
  // };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    // getEmployeesBasedOnParams();
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    console.log("Page --- ", page);
    console.log("RowsPerPage --- ", rowsPerPage);
    // getEmployeesBasedOnParams();
  };

  // useEffect(() => {
  //   console.log("Rows per page: ", rowsPerPage)
  //   // getEmployeesBasedOnParams();
  // }, [rowsPerPage]);

  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="simple-table">
        <TableHead>
          <TableRow className={classes.tablerow}>
            <TableCell>Id_Angajat</TableCell>
            <TableCell align="center">Nume</TableCell>
            <TableCell align="center">Prenume</TableCell>
            <TableCell align="center">CNP</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Telefon</TableCell>
            <TableCell align="center">Tip Contract</TableCell>
            <TableCell align="center">Data Angajarii</TableCell>
            <TableCell align="center">Salariu</TableCell>
            <TableCell align="center">
              <SettingsIcon className={classes.SettingsIcon}></SettingsIcon>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? employees.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : employees
          ).map((employee, index) => (
            <TableRow key={employee.id}>
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
                <ButtonGroup>
                  <EditIcon />
                  <DeleteIcon />
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 20, 50]}
              colSpan={11}
              count={employees.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

TableEmployeesComponent.propTypes = {
  employees: PropTypes.array.isRequired,
};

export default TableEmployeesComponent;
