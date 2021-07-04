import axios from "axios";
import store from "../store/index";
import get_projects from "./script/get/get_projects";
import LocalStorageService from "./script/ServiceLocalStorage";
const localStorageService = LocalStorageService.getService();

//var api_route = "http://192.168.0.124:3000";
var api_route = "http://localhost:3000";
// var api_route = "https://kasedapi.mounoydev.com";
const axiosAPIistance = axios.create({
  baseURL: api_route,
});
axiosAPIistance.defaults.timeout = 60 * 1000 * 5;

axiosAPIistance.interceptors.request.use(
  async (config) => {
    const token = await localStorageService.getAccessToken();
    config.headers["Content-Type"] = "application/json";
    if (token != null) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

import createAuthRefreshInterceptor from "axios-auth-refresh";

const user = JSON.parse(localStorage.getItem("info-user"));
const re_token = localStorageService.getRefreshToken();
const refreshAuthLogic = (failedRequest) =>
  axiosAPIistance
    .post("/api/retoken", {
      username: user.username,
      refreshToken: re_token,
    })
    .then((res) => {
      failedRequest.response.config.headers["x-access-token"] = res.data.token;
      localStorageService.setToken(res.data);
      store.commit("AUTH_SUCCESS", res.data.token);
      get_projects.fecth();
      return Promise.resolve();
    })
    .catch((error) => {
      if (error.response.status === 403) {
        console.log(403);
        store.dispatch("AUTH_LOGOUT");
      }
    });

// Instantiate the interceptor (you can chain it as it returns the axios instance)
createAuthRefreshInterceptor(axiosAPIistance, refreshAuthLogic);

export const http = axiosAPIistance;
