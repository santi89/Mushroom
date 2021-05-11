<template>
  <f7-app v-bind="f7params" >


  <!-- Your main view, should have "view-main" class -->
  <!-- <f7-view main class="safe-areas" url="/"></f7-view> -->
   <!-- Views/Tabs container -->
    <f7-views tabs class="safe-areas">
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar tabbar labels bottom v-show="true"> 
        <f7-link
          tab-link="#view-home"
          tab-link-active
          icon-ios="f7:home_fil"
          icon-aurora="f7:home_fil"
          icon-md="material:home"
          text="Home"
        ></f7-link>
        <f7-link
          tab-link="#view-managed"
          icon-ios="f7:square_stack_3d_up_fill"
          icon-aurora="f7:square_stack_3d_up_fill"
          icon-md="material:layers"
          text="Manage"
        ></f7-link>
        <f7-link
          tab-link="#view-editprofile"
          icon-ios="f7:person_circle_fill"
          icon-aurora="f7:person_circle_fill"
          icon-md="material:account_circle"
          text="Profile"
        ></f7-link>
      </f7-toolbar>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <f7-view id="view-home" main tab tab-active url="/"></f7-view>

      <!-- Catalog View -->
      <f7-view id="view-managed" name="managed" tab url="/managed/"></f7-view>

      <!-- Settings View -->
      <f7-view id="view-editprofile" name="editprofile" tab url="/editprofile/"></f7-view>
    </f7-views>

  </f7-app>
</template>
<script>
  import { ref, onMounted } from 'vue';
  import { f7, f7ready } from 'framework7-vue';
  import { getDevice }  from 'framework7/lite-bundle';
  import cordovaApp from '../js/cordova-app.js';

  import routes from '../js/routes.js';
  import store from '../js/store';

  export default {
    setup() {
      const device = getDevice();
      // Framework7 Parameters
      const f7params = {
        name: 'mushroom', // App name
        theme: 'auto', // Automatic theme detection


        id: 'io.framework7.mushroom', // App bundle ID
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
      const username = ref('');
      const password = ref('');

      const alertLoginData = () => {
        f7.dialog.alert('Username: ' + username.value + '<br>Password: ' + password.value, () => {
          f7.loginScreen.close();
        });
      }
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
      }
    }
  }
</script>