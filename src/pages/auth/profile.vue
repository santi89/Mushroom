<template>
  <f7-page name="profile" theme="dark">
    <f7-navbar title="Profile" back-link="Back"></f7-navbar>

    <div class="wrapper">
      <img
        class="image--cover"
        :src="image_url"
        alt=""
        :change="launchFilePicker"
      />
    </div>
    <f7-block>
      <f7-button outline popup-open=".demo-edit" :onclick="!editImg">
        Edit</f7-button
      >
      <input
        type="file"
        ref="file"
        style="display: none"
        @change="onFilePicked"
      />
    </f7-block>

    <f7-list no-hairlines-md >
      <f7-list-item link="" title="FirstName:" :after="user.firstname" ></f7-list-item>
      <f7-list-item title="FirstName:">{{ user.firstname }}</f7-list-item>
      <f7-list-item title="LastName:">{{ user.lastname }}</f7-list-item>
      <!-- <f7-list-item title="userName:">{{ user.username }}</f7-list-item> -->
      <f7-list-item title="email:">{{ user.email }}</f7-list-item>
      <f7-list-item title="phone:">{{ user.phone }}</f7-list-item>
    </f7-list>
    <!-- pop up edit -->
    <f7-popup
      class="demo-edit"
      :opened="popupOpened"
      @popup:closed="popupOpened = false"
    >
      <f7-page>
        <f7-navbar title="edit profile">
          <f7-nav-right>
            <f7-link popup-close>close</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <f7-list no-hairlines-md inline-labels>
            <f7-list-input
              required
              floating-label
              :value="user.firstname"
              @input="user.firstname = $event.target.value"
              label="FirstName"
              type="text"
              placeholder="Your FirstName"
              clear-button
            >
            </f7-list-input>
            <f7-list-input
              floating-label
              :value="user.lastname"
              @input="user.lastname = $event.target.value"
              label="LastName"
              type="text"
              placeholder="Your LastName"
              clear-button
            >
            </f7-list-input>
            <!-- <f7-list-input
              floating-label
              :value="user.email"
              @input="user.email = $event.target.value"
              label="E-mail"
              type="email"
              placeholder="Your e-mail"
              required
              clear-button
            >
            </f7-list-input> -->
            <f7-list-input
              floating-label
              :value="user.phone"
              @input="user.phone = $event.target.value"
              label="Phone"
              type="text"
              placeholder="Your Phone Number"
              required
              clear-button
            >
            </f7-list-input>
          </f7-list>
        </f7-block>
        <f7-block>
          <f7-button @click="submitEdit" outline strong>Add</f7-button>
        </f7-block>
      </f7-page>
    </f7-popup>




  </f7-page>
</template>

<script>
import { f7 } from "framework7-vue";
import get_users from "../../js/script/get/get_users";

export default {
  data() {
    return {
      // image_url:
      //    "https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png",
      editImg: false,
      popupOpened: false,
      user: {
        firstname: "santi",
        lastname: "bm",
        username: "santi",
        password: "123456",
        email: "aafa@fdsfsd",
        phone: "020",
        image: "",
      },
    };
  },
  methods: {
    // onfilechange: (e) => {
    //   var files = e.taget.files;
    //   if (!files.length) {
    //     return;
    //     createImage(files[0]);
    //   }
    // },
    // createImage(files) {
    //   var reader = new FileReader();
    //   reader.onload = (e) => {
    //     this.image = e.target.result;
    //   };
    //   reader.readAsDataURL(files);
    // },
    submitEdit() {
      popup - close;
    },
  },
  computed: {
    profile() {
      const user = JSON.parse(localStorage.getItem("info-user"));
      //console.log(user.isSuperUser);
      return {
        avatar: true,
        firstname: user.firstname,
        lastname: user.lastname,
        title: user.username,
        email: user.email,
        phone: user.phone,

      };
      },
  },
  created() {
  },
  mounted() {
    get_users.fatch();
  },
};
</script>

<style scoped>
.wrapper {
  text-align: center;
}

.image--cover {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px;
  object-fit: cover;
  object-position: center;
}
</style>
