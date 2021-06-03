import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SettingsIcon from '@material-ui/icons/Settings';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  paper:{
      position: 'relative',
      top: 160,
  },
  SettingsIcon:{
      position: 'relative',
      top: 3,
  },
  tablerow:{
    backgroundColor: '#948e8c',
    color: 'white',
  }
});

function createData(ID, nume, prenume, cnp, email, nrtel, tipcontr, dataangj, salariu) {
  return { ID, nume, prenume, cnp, email, nrtel, tipcontr, dataangj, salariu, EditIcon };
}

const rows = [
  createData(100, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(100, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(100, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(100, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(100, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(100, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(100, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(100, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
  createData(100, 'Popescu', 'Maricel', 1940308425561, 'maricelsefu@gmail.com', '0732545878', 'Nedeterminat', '08/02/2007', '5000Lei'  ),
];

export default function BasicTable() {
  const classes = useStyles();

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
            <TableCell align="center"><SettingsIcon className={classes.SettingsIcon}></SettingsIcon></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ID}>
              <TableCell component="th" scope="row">
                {row.ID}
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
      </Table>
    </TableContainer>
  );
}