
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
      store
    };
  },
  computed: {
    show_tabbar() {
      return f7.store.getters.show_tabbar;
    },
  },
};
</script>


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

      <!-- Catalog View -->
      <f7-view id="view-chatgroups" name="chatgroups" tab url="/chatgroups/"></f7-view>

      <!-- Settings View -->
      <f7-view id="view-settings" name="editprofile" tab url="/editprofile/"></f7-view>
    </f7-views>
    <f7-view v-if="!signed_in" url="/login/" :main="true"></f7-view>

    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Popup content goes here.</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <f7-login-screen id="my-login-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Login</f7-login-screen-title>
          <f7-list form>
            <f7-list-input
              type="text"
              name="username"
              placeholder="Your username"
              :value="username"
              @input="username = $event.target.value"
            ></f7-list-input>
            <f7-list-input
              type="password"
              name="password"
              placeholder="Your password"
              :value="password"
              @input="password = $event.target.value"
            ></f7-list-input>
          </f7-list>
          <f7-list>
            <f7-list-button title="Sign In" login-screen-close @click="alertLoginData"></f7-list-button>
            <f7-block-footer>
              Some text about login information.
              <br />Click "Sign In" to close Login Screen
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
    
  </f7-app>
</template>


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