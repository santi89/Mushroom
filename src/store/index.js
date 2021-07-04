import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

import NavigationItem from "./modules/NavigationItem";
import Tables from "./modules/Tables";
import Project from "./modules/Project";

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,

  modules: {
    NavigationItem,
    Tables,
    Project,
  }
});
