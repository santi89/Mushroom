<template>
  <f7-page name="home" theme-blue>
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
          panel-open="right"
          icon-ios="f7:menu"
          icon-aurora="f7:menu"
          icon-md="material:menu"
          icon-f7="menu"
        ></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <!-- panal for notifications -->
    <f7-popup  title="notifications">
      <f7-view>
        <f7-page>
          <f7-list>
            <f7-list-item> </f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-popup>
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
        <f7-list >
          <f7-list-item link="/devicelist/" :title="item.project_name" v-for="(item, i) in markers" :key="i" ></f7-list-item>
        </f7-list>
      </f7-card-content>
    </f7-card>

    <f7-fab position="center-bottom"  href="/addproject/">
      <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
      <!-- <f7-icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></f7-icon> -->
    </f7-fab>
  </f7-page>
</template>
<script>
import store from "../../store/index";
import get_projects from "../../js/script/get/get_projects";
import { http } from "../../http";
import LocalStorageService from "../../js/script/ServiceLocalStorage";
export default {
  data() {
    return {
      projectName: "",
      photo_url: null,
      display_name: "",
      markers: [],

    };
  },
  methods: {
    logout() {
      this.$store.dispatch("AUTH_LOGOUT");
    },
    // fecth() {
    //   const user = JSON.parse(localStorage.getItem("info-user"));
    //   try {
    //     if (user.isSuperUser === 0) {
    //       http
    //         .get("/api/users/admin", { params: { user_id: user.user_id } })
    //         .then((Response) => {
    //           const data = Response.data;
    //           //console.log(data);
    //           store.commit("Tables/SET_TABLE_PROJECTS", data);
    //           display_name=response.data.username;
    //         })
    //         .catch(() => {});
    //     }
    //     if (user.isSuperUser === 1) {
    //       http
    //         .get("/api/project")
    //         .then((Response) => {
    //           const data = Response.data;
    //           store.commit("Tables/SET_TABLE_PROJECTS", data);
    //           //console.log(data);
    //           display_name=response.data.username;
    //         })
    //         .catch(() => {
    //           //console.log("ERROR:", err);
    //         });
    //     }
    //   } catch (error) {
    //     return;
    //   }
    // },
    fecth_detail: function () {
      // ໂຕໄໝ່
      const user = JSON.parse(localStorage.getItem("info-user"));
      http
        .get("/api/project/id", {
          params: { sub_id: this.p_sub_id },
        })
        .then((Response) => {
          if (Response.status === 200) {
            this.project_data = Response.data;
            if (this.$route.name === "ProjectView") {
              return this.$router.replace({
                name: "ProjectView",
                params: { name: Response.data.prject_id },
              });
            }
            if (this.$route.name === "Main") {
              return this.$router.replace({
                name: "Main",
                params: { name: Response.data.prject_id },
              });
            }
            this.lat = Response.data.latitude;
            this.log = Response.data.longitude;
            this.markers = [
              {
                title: Response.data.project_name,
                detail: Response.data.dep_name[0].dep_name,
              },
            ];
            display_name=user.username;
          }
        })
        .catch(() => {});
    },
  },
  mounted() {
  this.fecth_detail();
  },
  computed: {
    fatchName(){
      const user = JSON.parse(localStorage.getItem("info-user"));
      //console.log(user.isSuperUser);
      return {
        avatar: true,
        firstname: user.firstname,
        lastname: user.lastname,
        title: user.username,
        email: user.email,
        phone: user.phone,

      };
        }
    }
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
