

<template>
  <f7-app v-bind="f7params">
    <!-- Your main view, should have "view-main" class -->
    <!-- <f7-view main class="safe-areas" url="/"></f7-view> -->

    <!-- Views/Tabs container -->
    <!-- <f7-views tabs class="safe-areas" v-if="signed_in"> -->

      <!-- <f7-view id="view-home" main tab tab-active url="/"></f7-view> -->

      <!-- <f7-view id="view-home" main tab tab-active url="/login/"></f7-view> -->

    

    <!-- Views/Tabs container -->
    <f7-views tabs class="safe-areas" v-if="signed_in">
      
      <!-- Tabbar for switching views-tabs -->
  

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <f7-view id="view-home" main tab tab-active url="/"></f7-view>

     

      <!-- Settings View -->
      <f7-view id="view-settings" name="editprofile" tab url="/editprofile/"></f7-view>
    </f7-views>
    <f7-view v-if="!signed_in" url="/login/" :main="true"></f7-view>

    
  </f7-app>
</template>


<script>
import { ref, onMounted } from "vue";
import { f7, f7ready } from "framework7-vue";
import { getDevice } from "framework7/lite-bundle";
import cordovaApp from "../js/cordova-app.js";

import routes from "../js/routes.js";
import store from "../js/store";

export default {
  setup() {
    const device = getDevice();
    // Framework7 Parameters
    const f7params = {
      name: "mushroom", // App name
      theme: "auto", // Automatic theme detection
      id: "io.framework7.mushroom", // App bundle ID
      // App store
      store: store,
      // App routes
      routes: routes,

      // Input settings
      input: {
        scrollIntoViewOnFocus: device.cordova && !device.electron,
        scrollIntoViewCentered: device.cordova && !device.electron,
      },
      // Cordova Statusbar settings
      statusbar: {
        iosOverlaysWebView: true,
        androidOverlaysWebView: false,
      },
    };
    // Login screen data
    const username = ref("");
    const password = ref("");

    const alertLoginData = () => {
      f7.dialog.alert(
        "Username: " + username.value + "<br>Password: " + password.value,
        () => {
          f7.loginScreen.close();
        }
      );
    };
    onMounted(() => {
      f7ready(() => {
        // Init cordova APIs (see cordova-app.js)
        if (device.cordova) {
          cordovaApp.init(f7);
        }

        // Call F7 APIs here
      });
    });

    return {
      f7params,
      username,
      password,
      alertLoginData,
      
    };
  },
  computed: {
    
  },
};
</script>

<style scoped>
.floating-btn {
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 50%;
  font-size: 40px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  position: flixed;
}


</style>