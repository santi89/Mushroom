<template>
  <f7-page no-hairlines-md theme="#336359">
    <f7-navbar title="Add Project" back-link="back" >
      <!-- <f7-nav-right fill onclick="">Add</f7-nav-right>      -->
    </f7-navbar>

    <f7-list>
      <f7-list-input
        outline
        floating-label
        label="Project Name"
        type="text"
        :value="projectname"
        @input="projectname = $event.target.value"
        required
      ></f7-list-input>

      <f7-list-input
        outline
        floating-label
        label="longitude"
        type="number"
        :value="longtitude"
        @input="longtitude = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        outline
        floating-label
        label="tatitude"
        type="number"
        :value="tatitude"
        @input="tatitude = $event.target.value"
      ></f7-list-input>

      <f7-list-input
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
      ></f7-list-input>

      <f7-list-input
        floating-label
        outline
        label="device Name"
        type="text"
        :value="devicename"
        @input="devicename = $event.target.value"
      ></f7-list-input>
    </f7-list>

    <f7-block>
      <f7-button outline @onClick="showdata">add</f7-button>
    </f7-block>
  </f7-page>
</template>

<script>
import { f7} from 'framework7-vue';

export default {
  data() {
    return {
      projectname: "",
      longtitude: "",
      tatitude: "",
      timestart: "",
      timeend: "",
      devicename: "",
      status:""
    };
  },
  created() {
    
  },
  methods:{
    showdata(){
      console.alert(projectname,longitude,tatitude,timestart,timeend,devicename,status);
    }
  }
};
</script>

<style></style>
