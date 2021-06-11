import React from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
  paper: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  container: {
    width: "700px",
    height: "600px",
    fontFamily: "roboto",
    backgroundColor: "white",
    position: "relative",
    top: "150px",
    borderRadius: "10px",
    backgroundColor: "rgba(241, 205, 185, 0.3)",
  },
  container2: {
    display: "flex",
    position: "relative",
    left: "50px",
  },
  formControl: {
    position: "relative",
    left: "230px",
    bottom: "32px",
  },
  button: {
    position: "relative",
    top: 80,
    marginRight: 10,
    float: "right",
    background: "linear-gradient(45deg, #F1CDB9 10%, #b6aeab 90%)",
    borderRadius: 5,
    border: 0,
    color: "black",
    height: 30,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px #989898",
    fontFamily: "roboto",
  },
});

export default function RegistrationEmployeeComponent() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.paper}>
      <div className={classes.container}>
        <form>
          <div>Date Angajat</div>
          <br />
          <div class="form-row">
            <div class="form-group col-md-6">
              <input
                type="text"
                id="nume"
                class="form-control"
                placeholder="Nume"
                required
                autoFocus
              />
            </div>
            <div class="form-group col-md-6">
              <input
                type="text"
                id="prenume"
                class="form-control"
                placeholder="Prenume"
                required
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input
                type="text"
                id="cnp"
                class="form-control"
                placeholder="CNP"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <input
                type="tel"
                id="numarTelefon"
                class="form-control"
                placeholder="Numar Telefon"
                required
              />
            </div>
          </div>
          <br />
          <div class="form-group">
            <input
              type="email"
              id="email"
              class="form-control"
              placeholder="Email"
              required
            />
          </div>
          <br />
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
                inputProps={{ "aria-label": "Without label" }}
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
            <input
              type="text"
              id="salariu"
              class="form-control"
              placeholder="Salariu Net"
              required
            />
          </div>
          <div class="form-group">
            {/* <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Accept termenele si conditiile
              </label>
            </div> */}
          </div>
          <button type="submit" class="btn btn-primary">
            Adauga angajat nou
          </button>
        </form>
      </div>
    </div>
  );
}
