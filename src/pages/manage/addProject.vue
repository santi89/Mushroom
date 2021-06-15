<template>
  <f7-page no-hairlines-md theme="teal">
    <f7-navbar title="Add Project" back-link="back">
      <!-- <f7-nav-right fill onclick="">Add</f7-nav-right>      -->
    </f7-navbar>

    <f7-list>
      <f7-list-input
        outline
        floating-label
        label="Project Name"
        type="text"
        :value="projects.projectname"
        @input="projects.projectname = $event.target.value"
        required
      ></f7-list-input>

      <f7-list-input
        outline
        floating-label
        label="longitude"
        type="number"
        :value="projects.longtitude"
        @input="projects.longtitude = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        outline
        floating-label
        label="tatitude"
        type="number"
        :value="projects.tatitude"
        @input="projects.tatitude = $event.target.value"
      ></f7-list-input>

      <f7-list-input
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
      ></f7-list-input>

      <f7-list-input
        floating-label
        outline
        label="device Name"
        type="text"
        :value="projects.devicename"
        @input="projects.devicename = $event.target.value"
      ></f7-list-input>
    </f7-list>

    <f7-block>
      <f7-button outline @onClick="showdata">add</f7-button>
    </f7-block>
  </f7-page>
</template>

<script>
import { f7 } from "framework7-vue";

export default {
  data() {
    return {
      projects: {
        projectname: "",
        longtitude: "",
        tatitude: "",
        timestart: "",
        timeend: "",
        devicename: "",
        status: "",
      },
    };
  },
  created() {},
  methods: {
    showdata() {
      console.log("you are ",projects.projectname);
     
    },
  },
};
</script>

<style></style>
