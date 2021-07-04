import LocalStorageService from "../js/script/ServiceLocalStorage";
const localStorageService = LocalStorageService.getService();

export default {
  token: localStorageService.getAccessToken() || "",
  sctrack: false,
  ispa: localStorage.getItem("ispa") || null,
};
