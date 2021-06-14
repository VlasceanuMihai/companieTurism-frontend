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

  // GET
  function getDocument(documentId) {
    setupAxiosInterceptors();
    return getDocumentApi(documentId);
  }

  function getAllDocuments() {
    setupAxiosInterceptors();
    return getAllDocumentsApi();
  }

  // POST
  function createDocument(body) {
    setupAxiosInterceptors();
    return createDocumentApi(body);
  }

  // PUT
  function updateDocument(documentId, body) {
    setupAxiosInterceptors();
    return updateDocumentApi(documentId, body);
  }

  // DELETE
  function deleteDocumentById(documentId) {
    setupAxiosInterceptors();
    return deleteDocumentApi(documentId);
  }

  return {
    getDocument,
    getAllDocuments,
    createDocument,
    updateDocument,
    deleteDocumentById,
  };
}

export default DocumentAdminService;
