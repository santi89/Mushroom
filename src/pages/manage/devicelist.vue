<template>
  <f7-page>
    <f7-navbar back-link="back" title="Device"> </f7-navbar>
    <f7-block>
      <f7-block-title class="block-title">List device</f7-block-title>
    </f7-block>

    <f7-fab position="right-top" color="teal" href="">
      <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
      <f7-button popup-open=".addDevice-popup"> </f7-button>
    </f7-fab>

    <f7-card>
      <f7-list>
        <f7-list-item link="/humidityAndtemparature/" title="Controll device 1">
        </f7-list-item>
        <f7-list-item link="#"> aa </f7-list-item>
      </f7-list>
    </f7-card>
    <!-- popup adddevice -->
    <f7-popup
      class="addDevice-popup"
      :opened="popupOpened"
      @popup:closed="popupOpened = false"
    >
      <f7-page>
        <f7-navbar title="Add Device">
          <f7-nav-right>
            <f7-link popup-close>close</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <f7-list no-hairlines-md>
            <f7-list-input
              clear-button
              outline
              floating-label
              label="DeviceToken"
              :value="deviceKey"
              @input="deviceKey = $event.target.value"
              type="text"
            >
            </f7-list-input>
          </f7-list>
        </f7-block>
        <!-- btn -->
        <f7-block>
          <f7-block>
            <f7-button onclick="" popup-close raised fill>Add</f7-button>
          </f7-block>
        </f7-block>
      </f7-page>
    </f7-popup>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      popupOpened: false,
      deviceKey: "",
      deviceHeader: "",
    };
  },
  // setup() {
  //   // helpers data for axis
  //   const dates = [];
  //   const today = new Date();
  //   const year = today.getFullYear();
  //   const month = today.getMonth();
  //   for (let i = 0; i < 4; i += 1) {
  //     dates.push(new Date(year, month - (3 - i)));
  //   }
  //   const axisDateFormat = Intl.DateTimeFormat(undefined, {
  //     month: "short",
  //     year: "numeric",
  //   });
  //   const tooltipDateFormat = Intl.DateTimeFormat(undefined, {
  //     month: "long",
  //     year: "numeric",
  //   });
  //   return {
  //     dates,
  //     axisDateFormat,
  //     tooltipDateFormat,
  //   };
  // },
};
</script>

<style scoped>
.block-title {
  font-size: "20px";
}
</style>
