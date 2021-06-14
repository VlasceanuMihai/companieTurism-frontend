import {
  getDocumentApi,
  getAllDocumentsApi,
  createDocumentApi,
  updateDocumentApi,
  deleteDocumentApi,
} from "../api/adminApi/AdminApi";
import AuthenticationService from "../auth/AuthenticationService";

function DocumentAdminService() {
  const { setupAxiosInterceptors } = AuthenticationService();

  function getDocument(documentId) {
    setupAxiosInterceptors();
    return getDocumentApi();
  }

  function getAllDocuments() {
    setupAxiosInterceptors();
    return getAllDocumentsApi();
  }

  function createDocument(body) {
    setupAxiosInterceptors();
    return createDocumentApi(body);
  }

  function updateEmployee(documentId, body) {
    setupAxiosInterceptors();
    return updateDocumentApi(documentId, body);
  }

  function deleteDocumentById(documentId) {
    setupAxiosInterceptors();
    return deleteDocumentApi(documentId);
  }

  return {
    getDocument,
    getAllDocuments,
    createDocument,
    updateEmployee,
    deleteDocumentById
  };
}

export default DocumentAdminService;
