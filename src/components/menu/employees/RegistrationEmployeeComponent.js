import React from "react";
import { makeStyles } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
  paper:{
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    
  },
  container:{
    width: "700px",
    height: "600px",
    fontFamily: "roboto",
    backgroundColor: "white",
    position: "relative",
    top: "150px",
    borderRadius: "10px",
    backgroundColor: "rgba(241, 205, 185, 0.4)"
        
  },
  container2: {
    display: 'flex',
    position:"relative",
    left: "50px"
  },
  formControl:{
    position:"relative",
    left: "230px",
    bottom: "32px"
  }
})



  

export default function RegistrationEmployeeComponent() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
  <div className={classes.paper}>
    <div className={classes.container}>
    <form>
      <div>Date Personale</div>
      <br/>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="text" class="form-control" placeholder="Nume"/>
    </div>
    <div class="form-group col-md-6">
      <input type="text" class="form-control" placeholder="Prenume"/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="text" class="form-control" placeholder="CNP"/>
    </div>
    <div class="form-group col-md-6">
      <input type="tel" class="form-control" placeholder="Numar Telefon"/>
    </div>
  </div>
  <div>Date Contact</div>
  <br/>
  <div class="form-group">
    <input type="email" class="form-control"  placeholder="Adresa Email"/>
  </div>
  <div>Date Angajat/Contract</div>
  <br/>
  <form className={classes.container2} noValidate>
      <TextField
        id="date"
        label="Data Angajarii"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    <div>
    <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>
            Tip Contract Angajat
          </MenuItem>
          <MenuItem value={10}>LEAD</MenuItem>
          <MenuItem value={20}>SUCURSALA</MenuItem>
          <MenuItem value={30}>TRAVEL GUIDE</MenuItem>
        </Select>
      </FormControl>
    </div>
    <div class="form-group">
    <input type="text" class="form-control"  placeholder="Salariu Net"/>
    </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Accept termenele si conditiile
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Creeza profil angajat nou</button>
</form>
    </div>
  </div>
  );
}
