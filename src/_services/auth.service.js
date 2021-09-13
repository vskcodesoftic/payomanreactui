import axios from "axios";
import { BehaviorSubject } from 'rxjs';

const API_URL = "http://localhost:8001/api/merchant/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};




const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      console.log("data",response.data)
      if (response.data) {
        localStorage.setItem("userData", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("userData");
  window.location.replace('/auth')
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