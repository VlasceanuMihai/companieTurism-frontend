/* eslint-disable react-hooks/exhaustive-deps */
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
  Button,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import AdminService from "../../../services/AdminService";

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

function TableEmployeesComponent({ data }) {
  const classes = useStyles();
  const { deleteEmployeeById } = AdminService();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteEmployee = (event, employeeId) => {
    deleteEmployeeById(employeeId)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          alert("Employee - " + employeeId + " successful deleted.");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  // useEffect(() => {
  //   console.log("useEffect --- ", employees);
  // }, [employees]);

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
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((element, index) => (
            <TableRow key={element.id}>
              <TableCell component="th" scope="row">
                {element.id}
              </TableCell>
              <TableCell align="center">{element.lastName}</TableCell>
              <TableCell align="center">{element.firstName}</TableCell>
              <TableCell align="center">{element.cnp}</TableCell>
              <TableCell align="center">{element.email}</TableCell>
              <TableCell align="center">{element.phoneNumber}</TableCell>
              <TableCell align="center">{element.employeeType}</TableCell>
              <TableCell align="center">{element.dateOfEmployment}</TableCell>
              <TableCell align="center">{element.wage}</TableCell>
              <TableCell align="center">
                <ButtonGroup>
                  <Button>
                    <EditIcon />
                  </Button>
                  <Button>
                    <DeleteIcon
                      onClick={() => deleteEmployee(this, element.id)}
                    />
                  </Button>
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
              count={data.length}
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

export default TableEmployeesComponent;
