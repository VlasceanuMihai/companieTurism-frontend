import { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router";
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
import AddIcon from "@material-ui/icons/Add";
import ListIcon from "@material-ui/icons/List";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import HotelAdminService from "../../../services/HotelAdminService";

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

function TableFlightsComponent({ data, ...rest }) {
  const classes = useStyles();
  let history = useHistory();
  const role = sessionStorage.getItem("user_role");
  const { deleteHotelById } = HotelAdminService();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    event.preventDefault();

    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    event.preventDefault();

    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteHotel = (event, hotelId) => {
    deleteHotelById(hotelId)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          alert("Hotel successful deleted.");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  const pushTo = (path) => {
    history.push(path);
  };

  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="simple-table">
        <TableHead>
          <TableRow className={classes.tablerow}>
            <TableCell>Id_Hotel</TableCell>
            <TableCell align="center">Nume hotel</TableCell>
            <TableCell align="center">Stele</TableCell>
            <TableCell align="center">Tara</TableCell>
            <TableCell align="center">Oras</TableCell>
            <TableCell align="center">Scenariu covid</TableCell>
            <TableCell align="center">Angajat</TableCell>
            <TableCell align="center">Pachete cazare</TableCell>
            {role === "ROLE_ADMIN" && (
              <TableCell align="center">
                <SettingsIcon className={classes.SettingsIcon}></SettingsIcon>
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((element, index) => (
            <TableRow key={index + 1}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="center">{element.hotelName}</TableCell>
              <TableCell align="center">{element.hotelRating}</TableCell>
              <TableCell align="center">
                {element.destination.country}
              </TableCell>
              <TableCell align="center">{element.destination.city}</TableCell>
              <TableCell align="center">
                {element.destination.covidScenario}
              </TableCell>
              <TableCell align="center">
                {element.destination.employee.email}
              </TableCell>
              <TableCell align="center">
                <ButtonGroup>
                  {role === "ROLE_ADMIN" && (
                    <Button
                      onClick={() =>
                        pushTo(
                          "/admin/accommodationPackage/hotel/" +
                            element.id +
                            "/form"
                        )
                      }
                    >
                      <AddIcon />
                    </Button>
                  )}
                  <Button
                    onClick={() =>
                      pushTo("/admin/accommodationPackages/hotel/" + element.id)
                    }
                  >
                    <ListIcon />
                  </Button>
                </ButtonGroup>
              </TableCell>
              {role === "ROLE_ADMIN" && (
                <TableCell align="center">
                  <ButtonGroup>
                    <Button
                      onClick={() => pushTo("/admin/hotel/form/" + element.id)}
                    >
                      <EditIcon />
                    </Button>
                    <Button onClick={() => deleteHotel(this, element.id)}>
                      <DeleteIcon />
                    </Button>
                  </ButtonGroup>
                </TableCell>
              )}
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

TableFlightsComponent.propTypes = {
  data: PropTypes.array.isRequired,
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

export default TableFlightsComponent;
