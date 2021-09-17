import axios from "axios";
import { BehaviorSubject } from "rxjs";
import { history } from "../_helpers/history";

const API_URL = "https://payoman.com/api/merchant/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

export const authenticationService = {
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      console.log("data", response.data);
      if (response.data) {
        localStorage.setItem("userData", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("userData");
  window.location.reload();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("userData"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
