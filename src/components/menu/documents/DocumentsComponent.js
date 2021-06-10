/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AdminService from "../../../services/AdminService";
import NavbarComponent from "../navbar/NavbarComponent";
import TableDocumentsComponent from "./TableDocumentsComponent";
import AddButtonComponent from "../buttons/AddButtonComponent";

function DocumentsComponent() {
  const { getAllDocuments } = AdminService();
  const [documents, setDocuments] = useState(null);
  const [documentsError, setDocumentsError] = useState(null);

  useEffect(() => {
    getAllDocuments()
      .then((response) => {
        console.log(response.data);
        setDocuments(response.data);
      })
      .catch((error) => {
        console.log(error);
        setDocumentsError(error.response);
      });
  }, []);

  return (
    <div>
      <NavbarComponent />
      {<AddButtonComponent name={"Adaugare document"} />}
      {documentsError !== null && <div>{documentsError}</div>}
      {documents && <TableDocumentsComponent data={documents} />}
    </div>
  );
}

export default DocumentsComponent;
