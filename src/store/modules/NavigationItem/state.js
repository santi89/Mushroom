export default {
  barColor: "rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)",
  drawer: null,
  itemDrawer: [
    {
      icon: "mdi-home",
      title: "main",
      to: "/page/main/11",
    },
    {
      icon: "mdi-view-dashboard",
      title: "projects_management",
      to: "/page/project/edit",
    },
  ],
  itemDrawerSuper: [
    {
      icon: "mdi-home",
      title: "main",
      to: "/page/main/11",
    },
    {
      title: "management",
      icon: "mdi-clipboard-text",
      group: "",
      children: [
        {
          title: "role",
          to: "page/admin/role/management",
        },
        {
          title: "department",
          to: "page/admin/department/management",
        },
        {
          // icon: "mdi-account-multiple",
          title: "all_users",
          // group: "/page/all-users",
          to: "page/all-users/manage",
        },
        {
          // icon: "mdi-account",
          title: "my_profile",
          to: "page/user",
        },
        {
          // icon: "mdi-sitemap",
          title: "device_type",
          to: "page/admin/device-type/management",
        },
        {
          // icon: "mdi-sitemap",
          title: "devices",
          to: "page/admin/devices/management",
        },
        {
          title: "unit",
          to: "page/admin/unit/management",
        },
        {
          title: "head_data",
          to: "page/admin/head-data/management",
        },
        // {
        //   // icon: "mdi-sitemap",
        //   title: "gpio",
        //   to: "page/admin/gpio/management",
        // },
      ],
    },
    {
      icon: "mdi-view-dashboard",
      title: "projects_management",
      to: "/page/project/edit",
    },
  ],
};
