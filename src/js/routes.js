// import HomePage from "../pages/manage/home.vue";
import ProjectView from "../pages/manage/projectView.vue";
import AboutPage from "../pages/about.vue";
import FormPage from "../pages/form.vue";
import LogIn from "../pages/auth/login.vue";
import SignUp from "../pages/auth/signup.vue";
import Profile from "../pages/auth/profile.vue";
import AddProject from "../pages/manage/addProject.vue";
import Devicelist from "../pages/manage/devicelist.vue";
import Notificate from "../pages/manage/notifications.vue";
import humidityAndtemparature from "../pages/manage/humidityAndTemparatureControl.vue";

import DynamicRoutePage from "../pages/dynamic-route.vue";
import RequestAndLoad from "../pages/request-and-load.vue";
import NotFoundPage from "../pages/404.vue";

var routes = [
  // {
  //   path: "/",
  //   component: HomePage,
  // },
  {
    path: "/ProjectView",
    component: ProjectView,
  },
  {
    path: "/notificate/",
    component: Notificate,
  },
  {
    path: "/about/",
    component: AboutPage,
  },
  {
    path: "/login/",
    component: LogIn,
  },
  {
    path: "/profile/",
    component: Profile,
  },
  {
    path: "/humidityAndtemparature/",
    component: humidityAndtemparature,
  },
  {
    path: "/addproject/",
    component: AddProject,
  },

  {
    path: "/devicelist/",
    component: Devicelist,
  },
  {
    path: "/signup/",
    component: SignUp,
  },
  {
    path: "/form/",
    component: FormPage,
  },

  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRoutePage,
  },
  {
    path: "/request-and-load/user/:userId/",
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: "Vladimir",
          lastName: "Kharlampidi",
          about: "Hello, i am creator of Framework7! Hope you like it!",
          links: [
            {
              title: "Framework7 Website",
              url: "http://framework7.io",
            },
            {
              title: "Framework7 Forum",
              url: "http://forum.framework7.io",
            },
          ],
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            },
          }
        );
      }, 1000);
    },
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
