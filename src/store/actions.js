import LocalStorageService from "../js/script/ServiceLocalStorage";
const localStorageService = LocalStorageService.getService();

export const AUTH_LOGOUT = ({ commit }) => {
  return new Promise((resolve) => {
    commit("AUTH_LOGOUT");
    localStorageService.clearToken();
    localStorage.removeItem("info-user");
    localStorage.removeItem("pd");
    window.location.reload();
    resolve();
  });
};
