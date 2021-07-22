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
        :value="timestart"
        @input="timestart = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        floating-label
        outline
        label="time end"
        type="Date"
        :value="timeend"
        @input="timeend = $event.target.value"
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
      <f7-button outline @Click="test">add</f7-button>
    </f7-block>
  </f7-page>
</template>

<script>
import { f7 } from "framework7-vue";
import { http } from "../../http";
import { mapState } from "vuex";
// ດ້ານ api ມັນໃຫ້ໃສ່ ອຸປະກອນ ແຕ່ໃນນີ້ບໍ່ມີກະໄດ້ ເຮັດແນວເລີ
export default {
  
  data() {
    return {
      dep: [],
      date: [],
      gpio_type: ["Input", "Output"],
      project_name: "",
      project_admin: "",
      dep_name: "ພາກວິຊາປູກຝັງ",
      longitube: "",
      latitube: "",
      msg:"",
    };
  },
  created() {},
  mounted() {
    this.fecth_dep();
    const user = JSON.parse(localStorage.getItem("info-user"));
      this.project_admin= user.user_id;
    
  },
  computed: {
    ...mapState("Tables", ["tables"]),
  },
  methods: {
    test() {
      console.log(this.dep_name);
    //console.log(user.isSuperUser);

    },
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
    addProject() {
      var data = {
        project_name: this.project_name,
        project_admin: this.project_admin,
        dep_name: this.dep.dep_id,
        date: this.date,
        longitube: this.longitube,
        latitube: this.latitube,
      };
      http
        .post("/api/mushroom_project", data)
        .then((Response) => {
          if (Response.status === 201) {
            this.msg = Response.data.stt;
            f7.dialog.alert("Done", "ການເພີ່ມສຳເລັດ");
          }
          if (Response.status === 200) {
            this.msg = Response.data.stt;
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
