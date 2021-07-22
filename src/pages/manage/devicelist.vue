<template>
  <f7-page>
    <f7-navbar back-link="back" color-teal>
      <f7-nav-title class="">Device </f7-nav-title>
      <f7-nav-right>
        <f7-link
          href="/report/"
          color="black"
          icon-ios="f7:chart_bar"
          icon-aurora="f7:chart_bar"
          icon-md="material:poll"
          icon-f7="poll"
        ></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <!-- <f7-fab position="right-top" color="teal" href="">
      <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
      <f7-button popup-open=".addDevice-popup"> </f7-button>
    </f7-fab> -->
    <f7-card>
      <f7-card-header>
        <div>List device</div>
        <div class="data-table-links">
          <f7-row>
            <f7-col>
              <f7-link
                class="color-black"
                icon-only
                icon-ios="f7:plus"
                icon-aurora="f7:plus"
                icon-md="material:add"
                icon-f7="add"
              ></f7-link>
            </f7-col>
            <f7-col></f7-col>
            <f7-col>
              <f7-link
                class="color-black"
                icon-only
                icon-ios="f7:trash"
                icon-aurora="f7:trash"
                icon-md="material:delete"
                icon-f7="delete"
              ></f7-link>
            </f7-col>
          </f7-row>
        </div>
      </f7-card-header>
    </f7-card>

    <f7-card class="bg-color-teal" v-for="(item, i) in device_data" :key="i">
      <f7-card-content>
        <f7-row style="align-items: center">
          <label class="checkbox">
            <input
              type="checkbox"
              :value="item.device_id"
              v-model="check_device"
            />
            <i class="icon-checkbox"></i>
          </label>
          <!-- <div class="col-20 color-black">
          </div> -->
          <div class="col-80">
            <f7-list>
              <f7-list-item
                :title="item.device_name"
                link="/humidityAndtemparature/"
              ></f7-list-item>
            </f7-list>
          </div>
        </f7-row>
        <f7-row>
          <div class="col real-data">
            <f7-card class="c1">
              <f7-tittle>{{ item.device_name }} °C</f7-tittle>
            </f7-card>
          </div>
          <div class="col real-data">
            <f7-card class="c1">
              <span>{{ item.device_name }} %</span>
            </f7-card>
          </div>
        </f7-row>
        <f7-row> </f7-row>
      </f7-card-content>
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
import { f7 } from "framework7-vue";
import { http } from "../../http";

export default {
  props: {
    f7router: Object,
    pro_id: {
      type: String,
    },
  },
  data() {
    return {
      popupOpened: false,
      device_Key: "",
      device_name: [],
      device_data: "",
      check_device: [],
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.fatch_device();
  },
  methods: {
    fatch_data() {},
    fatch_device() {
      http
        .get("/api/dashboard/device_by_pro", {
          params: { project_id: this.pro_id },
        })
        .then((Response) => {
          if (Response.status === 200) {
            this.device_data = Response.data;
            //  this.device_name = Response.data;
            console.log("d");
            // this.project_Name = response.data;

            console.log(this.device_data);
          }
        })
        .catch(() => {});
    },
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
.real-data {
  text-align: center;
  height: 50px;
}
.c1 {
  height: 20px;
}
</style>
