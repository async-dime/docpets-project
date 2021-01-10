import axios from "axios";

const API_URL = "13.250.101.249:3000/user/";
// const API_URL = "http://localhost:8080/api/auth/";

const register = (nama, email, password, passwordConfirmation, telepon, role) => {
  return axios.post(API_URL + "signup", {
    nama,
    email,
    password,
    passwordConfirmation,
    telepon,
    role
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

// const getCurrentUser = () => {
//   return JSON.parse(localStorage.getItem("user"));
// };

export default {
  register,
  login,
  logout,
  // getCurrentUser
};
