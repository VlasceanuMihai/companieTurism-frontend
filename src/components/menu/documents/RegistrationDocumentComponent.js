/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-dupe-keys */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
// import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NavbarComponent from "../../menu/navbar/NavbarComponent";
import DocumentAdminService from "../../../services/DocumentAdminService";

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

export default function RegistrationDocumentComponent(props) {
  const classes = useStyles();
  let history = useHistory();
  const { getDocument, createDocument, updateDocumentApi } =
    DocumentAdminService();

  const [documentData, setDocumentData] = useState({
    documentId: "",
    cnp: "",
    path: "",
    documentName: "",
  });
  const [showPasswordField, setShowPasswordField] = useState(true);

  const initialState = {
    documentId: "",
    cnp: "",
    path: "",
    documentName: "",
  };

  function handleChange(event) {
    event.preventDefault();

    setDocumentData((documentData) => ({
      ...documentData,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Body: ", documentData);
    createDocument({
      cnp: documentData.cnp,
      path: documentData.path,
      documentName: documentData.documentName,
    })
      .then((response) => {
        console.log(
          "Create new document for employee with cnp: " + documentData.cnp
        );
        if (response.status === 200) {
          alert(
            "Create new document for employee with cnp: " + documentData.cnp
          );
          history.push("/admin/documents");
          setDocumentData({
            documentId: "",
            cnp: "",
            path: "",
            documentName: "",
          });
        }
      })
      .catch((error) => {
        console.log("Error: ", error.response.data.message);
        alert("Error: " + error.response.data.message);
      });
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    console.log(documentData.documentId);
    updateDocumentApi(documentData.documentId, {
      documentId: documentData.id,
      cnp: documentData.cnp,
      path: documentData.path,
      documentName: documentData.documentName,
    })
      .then((response) => {
        console.log("Update employee with cnp: " + documentData.cnp);
        if (response.status === 200) {
          alert("Update employee with cnp: " + documentData.cnp);
          history.push("/admin/employees");
          setDocumentData({
            documentId: "",
            cnp: "",
            path: "",
            documentName: "",
          });
        }
      })
      .catch((error) => {
        console.log("Error: ", error.response.data.message);
        alert("Error: " + error.response.data.message);
      });
  };

  const findDocumentById = (documentId) => {
    getDocument(documentId)
      .then((response) => {
        if (response.data != null) {
        //   console.log("Date: ", response.data.dateOfEmployment);
          setDocumentData({
            cnp: documentData.cnp,
            path: documentData.path,
            documentName: documentData.documentName,
          });
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  useEffect(() => {
    const documentId = +props.match.params.id;
    if (documentId) {
      setShowPasswordField(false);
      findDocumentById(documentId);
    }
  }, []);

  return (
    <div>
      <NavbarComponent />
      <div className={classes.paper}>
        <div className={classes.container}>
          <form>
            <div>Adaugare document</div>
            <br />
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  type="text"
                  id="nume"
                  name="lastName"
                  class="form-control"
                  placeholder="Nume"
                  required
                  autoFocus
                  autoComplete="off"
                  defaultValue={documentData.lastName || ""}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  type="text"
                  id="prenume"
                  name="firstName"
                  class="form-control"
                  placeholder="Prenume"
                  required
                  defaultValue={documentData.firstName}
                  onChange={handleChange}
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
                  name="cnp"
                  required
                  readOnly={showPasswordField === false}
                  defaultValue={documentData.cnp}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  type="tel"
                  id="numarTelefon"
                  class="form-control"
                  placeholder="Numar Telefon"
                  name="phoneNumber"
                  required
                  defaultValue={documentData.phoneNumber}
                  onChange={handleChange}
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
                name="email"
                required
                defaultValue={documentData.email}
                onChange={handleChange}
              />
            </div>
            {showPasswordField === true && (
              <div class="form-group">
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  placeholder="Parola"
                  name="password"
                  required
                  defaultValue={documentData.password}
                  onChange={handleChange}
                />
              </div>
            )}
            <br />
            <form className={classes.container2} noValidate>
              <TextField
                id="date"
                label="Data Angajarii"
                type="date"
                name="dateOfEmployment"
                required
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={documentData.dateOfEmployment}
                onChange={handleChange}
              />
            </form>
            <div>
              <FormControl className={classes.formControl}>
                <Select
                  defaultValue={documentData.employeeType}
                  onChange={handleChange}
                  displayEmpty
                  name="employeeType"
                  className={classes.selectEmpty}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="" disabled>
                    Tip Contract Angajat
                  </MenuItem>
                  <MenuItem value={"SUCURSALA"}>SUCURSALA</MenuItem>
                  <MenuItem value={"TRAVEL_GUIDE"}>TRAVEL GUIDE</MenuItem>
                  <MenuItem value={"LEAD"}>LEAD</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div class="form-group">
              <input
                type="text"
                id="salariu"
                class="form-control"
                placeholder="Salariu Net"
                name="wage"
                required
                defaultValue={documentData.wage}
                onChange={handleChange}
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
            <button
              type="submit"
              class="btn btn-primary"
              onClick={documentData.documentId ? handleUpdate : handleSubmit}
            >
              {documentData.documentId
                ? "Actualizare angajat"
                : "Adauga angajat nou"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
