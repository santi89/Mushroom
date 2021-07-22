// Import Vue
import { createApp } from "vue";
import store from "./store";
// import http from "./http";
// Import Framework7
import Framework7 from "framework7/lite-bundle";

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from "framework7-vue/bundle";
// import i18n from "../i18n";

// Import Framework7 Styles
import "framework7/framework7-bundle.css";

// Import Icons and App Custom Styles
import "../css/icons.css";
import "../css/app.css";

// Import App Component
import App from "../components/app.vue";
import routes from "../js/routes.js";


// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
const app = createApp(App);

// Register Framework7 Vue components
registerComponents(app);

app.use(store);
app.use(routes)
// app.use(i18n);

// Mount the app
app.mount("#app");
