<template>
  <f7-page>
    <f7-navbar back-link="back" title="Devices"> </f7-navbar>
    <f7-block>
      <f7-list>
        <f7-list-input
          clear-button
          outline
          floating-label
          label="Device name"
          :value="devicename"
        @input="devicename = $event.target.value"
          type="text"
        >
        </f7-list-input>
        <f7-list-input
          clear-button
          outline
          floating-label
          :value="wifiname"
        @input="wifiname = $event.target.value"
          label="Wifi name"
          type="text"
        ></f7-list-input>
        <f7-list-input
          clear-button
          outline
          floating-label
          label="Wifi password"
          :value="wifipassword"
        @input="wifipassword = $event.target.value"
          type="text"
        ></f7-list-input>

        <!-- list device type from database  -->

        <f7-list-item outline type="select" title="Device type">
          <option value="1">1</option>
        </f7-list-item>

        <f7-list-input outline floating-label label="Status" type="select">
          <option value="Active">Active</option>
          <option value="inActive">inActive</option>
        </f7-list-input>
      </f7-list>
    </f7-block>
    <f7-block>
      <f7-block>
        <f7-button outline>Add device</f7-button>
      </f7-block>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      devicename: "",
      wifiname: "",
      wifipassword: "",
      devicetype: "",
      status: "1",
    };
  },
};
</script>

<style></style>
