<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false">
      <f7-nav-title class="">Mushroom App</f7-nav-title>
      <f7-nav-right>
        <f7-link href="/notificate/">
          <f7-icon
            ios="f7:bell_circle"
            aurora="f7:bell_circle"
            md="material:notifications"
          >
            <f7-badge color="red">5</f7-badge>
          </f7-icon>
        </f7-link>
        <f7-link
          href
          panel-open="right"
          icon-ios="f7:menu"
          icon-aurora="f7:menu"
          icon-md="material:menu"
          icon-f7="menu"
        ></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <!-- panal for notifications -->
    <f7-panel top>
      <f7-view>
        <f7-page>
          <f7-list>
            <f7-list-item> </f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-panel>
    <!-- Left panel with cover effect-->
    <f7-panel right cover theme-dark>
      <f7-view>
        <f7-page>
          <div class="wrapper">
            <img class="image--cover" :src="photo_url" alt />
          </div>
          <f7-block style="text-align: center; margin-top: 1px">{{
            display_name
          }}</f7-block>

          <f7-list>
            <f7-list-item
              link="/profile/"
              view=".view-main"
              panel-close
              title="Profile"
            ></f7-list-item>
            <f7-list-item
              link="/login/"
              @click="signOut"
              view=".view-main"
              panel-close
              title="Sign out"
            ></f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-panel>

    <f7-block-title strong> Welcome to Mushroom Plant</f7-block-title>
    <!-- Page content-->

    <f7-card>
      <f7-card-content :padding="false">
        <f7-list>
          <f7-list-item link="/devicelist/" :title="projectName"></f7-list-item>
        </f7-list>
      </f7-card-content>
    </f7-card>

    <f7-fab position="center-bottom" color="peat" href="/addProject/" _blank>
      <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
      <!-- <f7-icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></f7-icon> -->
    </f7-fab>
  </f7-page>
</template>
<script>
import store from "../../store/index";
import get_projects from "../../js/script/get/get_projects";
export default {
  data() {
    return {
      projectName: "First project",
      photo_url: null,
      display_name: "santi",
    };
  },
  methods: {
    Findprojectname() {},
    logout() {
      this.$store.dispatch("AUTH_LOGOUT");
    },
  },
};
</script>

<style scoped>
.wrapper {
  text-align: center;
}

.image--cover {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px;
  object-fit: cover;
  object-position: center;
}
</style>
