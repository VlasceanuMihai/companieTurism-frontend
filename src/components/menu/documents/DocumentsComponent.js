/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AdminService from "../../../services/AdminService";
import NavbarComponent from "../navbar/NavbarComponent";
import DataTableComponent from "./TableDocumentsComponent";
import AddButtonComponent from "../addButton/AddButtonComponent";

function DocumentsComponent() {
  const { getAllDocuments } = AdminService();
  const [documents, setDocuments] = useState(null);
  const [documentsError, setDocumentsError] = useState(null);

  useEffect(() => {
    // let params = {};
    // params["page"] = 0;
    // params["size"] = 4;

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
      {documents && <DataTableComponent data={documents} />}
    </div>
  );
}

export default DocumentsComponent;
