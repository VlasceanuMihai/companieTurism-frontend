/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DocumentAdminService from "../../../services/DocumentAdminService";
import NavbarComponent from "../navbar/NavbarComponent";
import TableDocumentsComponent from "./TableDocumentsComponent";
import AddButtonComponent from "../buttons/AddButtonComponent";

function DocumentsComponent() {
  const profile = useSelector((state) => state.employeeProfile);
  const { getAllDocuments } = DocumentAdminService();
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
      {profile.role === "ROLE_ADMIN" && <AddButtonComponent name={"Adaugare document"} path={"/documents/form"}/>}
      {documentsError !== null && <div>{documentsError}</div>}
      {documents && <TableDocumentsComponent data={documents} />}
    </div>
  );
}

export default DocumentsComponent;
