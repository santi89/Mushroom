import { createStore } from "framework7/lite";

const store = createStore({
  state: {
    alert_message: null,
   
  },
  getters: {
    alert_message: (state) => state.alert_message,
    
    },
  actions: {
  },
  mutations: {
  
    setAlertMessage(state, payload) {
      state.alert_message = payload;
    },

  },
});
export default store;
