import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import SettingsIcon from '@material-ui/icons/Settings';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    fontFamily:'roboto',
  },
  paper:{
      position: 'relative',
      top: 100,
  },
  SettingsIcon:{
      position: 'relative',
      top: 3,
  },
  tablerow:{
    backgroundColor: '#948e8c',    
  }
});
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));


function TablePaginationActions(props) {
  const classes = useStyles1();
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
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
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

function createData(id, nume, prenume, cnp, email, nrtel, tipcontr, dataangj, salariu) {
  return { id, nume, prenume, cnp, email, nrtel, tipcontr, dataangj, salariu};
}

const rows = [
  createData(101, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(102, 'Popa', 'Marius', 1940308425561, 'maricelsefu@gmail.com', '0732545744', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(103, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(104, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(105, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(106, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(107, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(108, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(109, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(110, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(110, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
].sort((a, b) => (a.id < b.id ? -1 : 1));



export default function BasicTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  

  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="simple-table">
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
            <TableCell align="center"><SettingsIcon className={classes.SettingsIcon}></SettingsIcon></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.nume}</TableCell>
              <TableCell align="center">{row.prenume}</TableCell>
              <TableCell align="center">{row.cnp}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.nrtel}</TableCell>
              <TableCell align="center">{row.tipcontr}</TableCell>
              <TableCell align="center">{row.dataangj}</TableCell>
              <TableCell align="center">{row.salariu}</TableCell>
              <TableCell align="center"><EditIcon></EditIcon></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10,]}
              colSpan={11}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
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