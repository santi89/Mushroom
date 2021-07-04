<template>
  <f7-page no-hairlines-md>
    <f7-navbar title="Add Project" back-link="back" class="bg-color-teal">
      <!-- <f7-nav-right fill onclick="">Add</f7-nav-right>      -->
    </f7-navbar>

    <f7-list no-hairlines-md strong>
      <f7-list-input
        outline
        label="Project Name"
        type="text"
        placeholder="Project Name"
        :value="project_name"
        @input="project_name = $event.target.value"
        required
      ></f7-list-input>
      <f7-list-item
        :items="tables.users"
        disabled
        type="text"
        :value="project_admin"
        @input="project_admin = $event.target.value"
        item-value="user_id"
        item-text="username"
      ></f7-list-item>
      <f7-list-input
        outline
        placeholder="Longitube"
        label="Longitube"
        type="number"
        :value="longitube"
        @input="longitube = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        outline
        placeholder="Latitube"
        label="Latitube"
        type="number"
        :value="latitube"
        @input="latitube = $event.target.value"
      ></f7-list-input>

      <!-- <f7-list-input
        floating-label
        outline
        label="time Start"
        type="Date"
        :value="projects.timestart"
        @input="projects.timestart = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        floating-label
        outline
        label="time end"
        type="Date"
        :value="projects.timeend"
        @input="projects.timeend = $event.target.value"
      ></f7-list-input> -->

      <f7-list-input
        outline
        label="Pick date start and end"
        placeholder="Pick date start and end"
        type="datepicker"
        :value="date"
        @input="date = $event.target.value"
        :calendar-params="{ dateFormat: 'dd M yyyy', rangePicker: true }"
      ></f7-list-input>
      <!-- <f7-list-input 
        floating-label
        outline
        label="device Name"
        type="text"
        :value="projects.devicename"
        @input="projects.devicename = $event.target.value"
      ></f7-list-input> -->
    </f7-list>

    <f7-block>
      <f7-button outline Click="showdata">add</f7-button>
    </f7-block>
  </f7-page>
</template>

<script>
import { http } from "../../http";
import get_users from "../../js/script/get/get_users";
import { mapState } from "vuex";
// ດ້ານ api ມັນໃຫ້ໃສ່ ອຸປະກອນ ແຕ່ໃນນີ້ບໍ່ມີກະໄດ້ ເຮັດແນວເລີ
export default {
  data() {
    return {
      dep: [],
      device: [],
      date: [],
      gpio_type: ["Input", "Output"],
      project_name: null,
      project_admin: null,
      project_device: [],
      dep_name: "anyperson",
      longitube: null,
      latitube: null,
    };
  },
  created: {
    ...mapState("Tables", ["tables"]),
  },
  mounted() {
    get_users.fecth();
    this.fecth_dep();
    this.fecth_device();
  },
  computed:{
   
      },
  methods: {
    fecth_dep: function () {
      http
        .get("/api/dep/sig")
        .then((Response) => {
          this.dep = Response;
        })
        .catch((err) => {
          return err;
        });
    },
    fecth_device: function () {
      http
        .get("/api/project/add-device")
        .then((Response) => {
          this.device = Response.data;
        })
        .catch((err) => {
          return err;
        });
    },
    addProject() {
      var data = {
        project_name: this.project_name,
        project_admin: this.project_admin,
        project_device: this.project_device,
        dep_name: this.dep_name,
        date: this.date,
        longitube: this.longitube,
        latitube: this.latitube,
      };
      http
        .post("/api/project", data)
        .then((Response) => {
          if (Response.status === 201) {
            this.msg = Response.data.stt;
            this.sheet1 = true;
          }
          if (Response.status === 200) {
            this.msg = Response.data.stt;
            this.sheet = true;
          }
        })
        .catch(() => {});
    },
  },
};
</script>

<style>
label {
  font-size: 20rem;
}
</style>
