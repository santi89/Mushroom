<template>
  <f7-page name="home" color-teal>
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

    <!-- Left panel with cover effect-->
    <f7-panel right cover theme-dark>
      <f7-view>
        <f7-page>
          <div class="wrapper">
            <img class="image--cover" src="../../assets/mushroom.jpg" alt />
          </div>
          <f7-block style="text-align: center; margin-top: 1px"
            >{{ firstname }} {{ lastname }}</f7-block
          >
          <f7-list>
            <f7-list-item
              link="/profile/"
              view=".view-main"
              panel-close
              title="Profile"
            ></f7-list-item>
            <f7-list-item
              link="/login/"
              @click="logout()"
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

    <f7-card
      class="data-table data-table-init bg-color-teal"
      v-for="(item, i) in project_data"
      :key="i"
    >
      <f7-card-header>
        <div>ລາຍງານໂຄງການ</div>
        <div class="data-table-links">
          <f7-link
            @click="remove_pro()"
            class="color-black"
            icon-only
            icon-ios="f7:trash"
            icon-aurora="f7:trash"
            icon-md="material:delete"
            icon-f7="delete"
          ></f7-link>
          
        </div>
      </f7-card-header>
      <f7-card-content>
        <table>
          <tbody>
            <tr>
              <td class="checkbox-cell">
                <label class="checkbox">
                  <input
                    type="checkbox"
                    :value="item.project_id"
                    v-model="check_name"
                  />
                  <i class="icon-checkbox"></i>
                </label>
              </td>
              <td>
                <f7-list>
                  <f7-list-item
                    :title="item.project_name"
                    @click="
                      f7router.navigate(`/devicelist/${item.project_id}/`)
                    "
                    link=""
                  >
                  </f7-list-item>
                </f7-list>
              </td>
            </tr>
          </tbody>
        </table>
      </f7-card-content>
    </f7-card>
    <!-- <f7-card
      class="data-table data-table-init"
      v-for="(item, i) in project_data"
      :key="i"
    >
      <f7-card-header class="card-header">
        <div class="data-table-links">
          <a class="link">Add</a>
          <a class="link">Remove</a>
        </div>
      </f7-card-header>

      <f7-card-content :padding="false">
        <f7-list>
          <f7-list-item
            :title="item.project_name"
            @click="f7router.navigate(`/devicelist/${item.project_id}/`)"
            link=""
          >
          </f7-list-item>
          
        </f7-list>
      </f7-card-content>
    </f7-card>
     -->
    <f7-fab position="center-bottom" href="/addproject/">
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
import { f7 } from "framework7-vue";

export default {
  props: {
    f7router: Object,
  },
  data() {
    return {
      project_Name: [],
      project_data: "",
      photo_url: null,
      display_name: "",
      firstname: "",
      lastname: "",
      check_name: [],
      checked: false,
      dep:[],
     
    };
  },
  methods: {
    remove_pro() {
      for (var i = 0; i < this.check_name.length; i++) {

         const pro_id = this.check_name[i];
            console.log("done"+pro_id);

        confirm("Are you sure you want to delete this item?") &&
          http
          .put("/api/project/delete_pro",{
                "pro_id": pro_id
          })
          .then((Response) => {
            if (Response.status == 200) {
              this.fecth_detail();
            }
          })
          .catch(() => {});
      }
    },
    logout() {
      this.$store.dispatch("AUTH_LOGOUT");
    },
    fecth_detail: function () {
      // ໂຕໄໝ່
      const user = JSON.parse(localStorage.getItem("info-user"));
      http
        .get("/api/users/admin_m", {
          params: { user_id: user.user_id },
        })
        .then((Response) => {
          if (Response.status === 200) {
            // const data = Response.data;
            this.project_data = Response.data;
            // console.log(data);
            // this.project_Name = response.data;
            // console.log("d");
            // this.project_data = project_Name.project_name;
            // console.log(this.project_data);
          }
        })
        .catch(() => {});
    },
    
  },
  mounted() {
    this.fecth_detail();
    const user = JSON.parse(localStorage.getItem("info-user"));
    this.firstname = user.firstname;
    this.lastname = user.lastname;
  },
  computed: {},
  created() {
    // this.fecth_detail();
  },
  // filters: {
  //   tolist1(item) {
  //     return `/devicelist/${item.project_id}/`;
  //   },
  // },
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
