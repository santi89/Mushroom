import { createStore } from "vuex";
import Filemodule from "./Filemodule";

const store = createStore({
  modules: {
    file: Filemodule,
  },
  state: {
    alert_message: null,
    
  },
  getters: {
    alert_message: (state) => state.alert_message,
  },
  actions: {},
  mutations: {
    setAlertMessage(state, payload) {
      state.alert_message = payload;
    },
  },
});
export default store;
