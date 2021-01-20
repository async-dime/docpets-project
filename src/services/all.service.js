import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "13.250.101.249:3000/";
// const API_URL = "http://localhost:8080/api/test/";

// const getPublicContent = () => {
//   return axios.get(API_URL + "all");
// };

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getClinicBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "superadmin", { headers: authHeader() });
};

export default {
  // getPublicContent,
  getUserBoard,
  getClinicBoard,
  getAdminBoard,
};