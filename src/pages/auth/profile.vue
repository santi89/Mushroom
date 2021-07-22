<template>
  <f7-page name="profile" theme="dark">
    <f7-navbar title="Profile" back-link="Back"></f7-navbar>

    <div class="wrapper">
      <img
        class="image--cover"
        src="https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png"
        alt=""
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

    <f7-list no-hairlines-md>
      <f7-list-item title="FirstName:">{{ firstname }}</f7-list-item>
      <f7-list-item title="LastName:">{{ lastname }}</f7-list-item>
      <!-- <f7-list-item title="userName:">{{ user.username }}</f7-list-item> -->
      <f7-list-item title="email:">{{ email }}</f7-list-item>
      <f7-list-item title="phone:">{{ phone }}</f7-list-item>
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
              :value="firstname"
              @input="firstname = $event.target.value"
              label="FirstName"
              type="text"
              placeholder="Your FirstName"
              clear-button
            >
            </f7-list-input>
            <f7-list-input
              floating-label
              :value="lastname"
              @input="lastname = $event.target.value"
              label="LastName"
              type="text"
              placeholder="Your LastName"
              clear-button
            >
            </f7-list-input>
            <f7-list-input
              floating-label
              :value="email"
              @input="email = $event.target.value"
              label="E-mail"
              type="email"
              placeholder="Your e-mail"
              required
              clear-button
            >
            </f7-list-input>
            <f7-list-input
              floating-label
              :value="phone"
              @input="phone = $event.target.value"
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
          <f7-button @click="update()" outline strong>Update</f7-button>
        </f7-block>
      </f7-page>
    </f7-popup>
  </f7-page>
</template>

<script>
import { http } from "../../js/http";
import { f7 } from "framework7-vue";
import get_users from "../../js/script/get/get_users";

export default {
  data() {
    return {
      // image_url:
      //    "https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png",
      editImg: false,
      popupOpened: false,
      dep: [],
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
      phone: "",
      department: "",
    };
  },
  methods: {
    update: function () {
      const user = JSON.parse(localStorage.getItem("info-user"));
      const data = {
        "user_id": this.user_id,
        "username": this.username,
        "email": this.email,
        "firstname": this.firstname,
        "lastname": this.lastname,
        "dep_name": this.department,
        "status": this.status,
        "phone": this.phone,
        "isSuperUser": user.isSuperUser,
        "stt": 1,
      };
      confirm("ຕ້ອງການແກ້ໄຂກົດ OK ") &&
        http
          .put("/api/users", data)
          .then((Response) => {    
            if (Response.status === 201) {
              localStorage.setItem("info-user", JSON.stringify(data));
              window.location.reload();
            }
          })
          .catch(() => {});
    },
    fecth_dep() {
      http
        .get("/api/dep/sig")
        .then((Response) => {
          this.dep = Response;
        })
        .catch((err) => {
          return err;
        });
    },
    // ss() {
    //   console.log("aa" + this.firstname);
    //   console.log("aa" + this.lastname);
    //   console.log("aa" + this.username);
    //   console.log("aa" + this.email);
    //   console.log("aa" + this.firstname);
    //   console.log("aa" + this.department);
    // },
  },
  computed: {},
  created() {
    this.fecth_dep();
    const user = JSON.parse(localStorage.getItem("info-user"));
    this.username = user.username;
    this.email = user.email;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.department = user.dep_name;
    this.status = user.status;
    this.phone = user.phone;
  },
  mounted() {
    // const user = JSON.parse(localStorage.getItem("info-user"));
    // this.username = user.username;
    // this.email = user.email;
    // this.firstname = user.firstname;
    // this.lastname = user.lastname;
    // // this.department = user.dep_name;
    // this.status = user.status;
    // this.phone = user.phone;
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
