/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-dupe-keys */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";
import NavbarComponent from "../../menu/navbar/NavbarComponent";
import DocumentAdminService from "../../../services/DocumentAdminService";

const useStyles = makeStyles({
  paper: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  container: {
    width: "750px",
    height: "600px",
    fontFamily: "roboto",
    backgroundColor: "white",
    position: "relative",
    top: "150px",
    borderRadius: "10px",
    background: "linear-gradient(120deg, #BFADA9, #F0E2DD 40%, #ffffff)",
    boxShadow:
      "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    display: "flex",
    justifyContent: "center",
  },
  container2: {
    display: "flex",
    position: "relative",
    // left: "50px",
  },
  formControl: {
    position: "relative",
    left: "140px",
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
  const { getDocument, createDocument, updateDocument } =
    DocumentAdminService();

  const [documentData, setDocumentData] = useState({
    documentId: "",
    cnp: "",
    path: "",
    documentName: "",
  });
  const [isUpdatePage, setIsUpdatePage] = useState(false);

  // const initialState = {
  //   documentId: "",
  //   cnp: "",
  //   path: "",
  //   documentName: "",
  // };

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
        console.log("Document was created successfully!");
        if (response.status === 200) {
          alert("Document was created successfully!");
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
    updateDocument(documentData.documentId, {
      documentId: documentData.id,
      cnp: documentData.cnp,
      path: documentData.path,
      documentName: documentData.documentName,
    })
      .then((response) => {
        console.log("Document updated!");
        if (response.status === 200) {
          alert("Document updated!");
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

  const findDocumentById = (documentId) => {
    getDocument(documentId)
      .then((response) => {
        if (response.data != null) {
          //   console.log("Date: ", response.data.dateOfEmployment);
          setDocumentData({
            cnp: response.data.employee.cnp,
            path: response.data.path,
            documentName: response.data.documentName,
          });
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  useEffect(() => {
    const documentId = +props.match.params.id;
    console.log("DocumentId: " + documentId);
    if (documentId) {
      setIsUpdatePage(true);
      findDocumentById(documentId);
    }
  }, []);

  return (
    <div>
      <NavbarComponent />
      <div className={classes.paper}>
        <div className={classes.container}>
          <form>
            <div style={{ fontSize: "21px", marginTop: "5px" }}>
              Adaugare document pentru angajat
            </div>
            <br />
            <div class="form-group">
              <input
                id="cnp"
                name="cnp"
                type="text"
                class="form-control"
                placeholder="CNP"
                readOnly={isUpdatePage === true}
                required
                defaultValue={documentData.cnp}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <input
                id="path"
                name="path"
                type="text"
                class="form-control"
                placeholder="Path"
                required
                defaultValue={documentData.path}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <input
                id="documentName"
                name="documentName"
                type="text"
                class="form-control"
                placeholder="Document"
                required
                defaultValue={documentData.documentName}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              style={{
                background: "linear-gradient(45deg, #F1CDB9 10%, #b6aeab 90%)",
                border: "none",
              }}
              onClick={documentData.documentId ? handleUpdate : handleSubmit}
            >
              {documentData.documentId
                ? "Actualizare document"
                : "Adauga document nou"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
