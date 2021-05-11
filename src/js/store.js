import { createStore } from "framework7/lite";

const store = createStore({
  state: {
    image_url:
      "https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png",
    files: null,
    images: [],
    alert_message: null,
    show_tabbar: true,
  },
  getters: {
    image_url: (state) => state.image_url,
    files: (state) => state.files,
    images: (state) => state.images,
    alert_message: (state) => state.alert_message,
    show_tabbar: (state) => state.show_tabbar,
  },
  actions: {
    readFile({ commit }, action_name) {
      const files = event.target.files;
      commit("setFile", files);
      const fileReader = new FileReader();
      let file = files[0];
      if (file["size"] < 2000000) {
        fileReader.readAsDataURL(file);
        fileReader.addEventListener("load", () => {
          var imageUrl = fileReader.result;
          commit(action_name, imageUrl);
        });
        return;
      } else {
        commit("setAlertMessage", "The images size is greater than 2M");
        return;
      }
    },
  },
  modules: {},
  mutations: {
    setImageURL(state, payload) {
      state.image_url = payload;
    },
    setFiles(state, payload) {
      state.files = payload;
    },
    setImages(state, payload) {
      state.images = payload;
    },
    setAlertMessage(state, payload) {
      state.alert_message = payload;
    },
    setShowTabs(state, payload) {
      state.show_tabbar = payload;
    },
  },
});
export default store;
