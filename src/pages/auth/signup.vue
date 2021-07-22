<template>
  <f7-page name="signup">
    <!-- <f7-navbar title="Sign up" back-link="back" ></f7-navbar> -->

    <!-- <div class="wrapper">
      <img class="image--cover" :src="image_url" @click="launchFilePicker" />
    </div> -->

    <f7-block>
      <div style="text-align: center">
        <h1>Sign Up</h1>
      </div>
      <f7-list no-hairlines-md>
        <f7-list-input
          required
          outline
          floating-label
          :value="user.firstname"
          @input="user.firstname = $event.target.value"
          label="FirstName"
          type="text"
          clear-button
        >
        </f7-list-input>
        <f7-list-input
          floating-label
          :value="user.lastname"
          @input="user.lastname = $event.target.value"
          label="LastName"
          type="text"
          outline
          clear-button
        >
        </f7-list-input>
        <f7-list-input
          floating-label
          :value="user.email"
          @input="user.email = $event.target.value"
          label="E-mail"
          type="email"
          outline
          required
          clear-button
        >
        </f7-list-input>
        <f7-list-input
          floating-label
          :value="user.username"
          @input="user.username = $event.target.value"
          label="Username"
          type="text"
          outline
          clear-button
        >
        </f7-list-input>

        <f7-list-input
          floating-label
          :value="user.password"
          @input="user.password = $event.target.value"
          label="Password"
          type="password"
          outline
          required
          clear-button
          autocomplete="off"
        >
        </f7-list-input>
        <f7-list-input
          floating-label
          :value="user.phone"
          @input="user.phone = $event.target.value"
          label="Phone Number"
          type="text"
          outline
          required
          clear-button
        >
        </f7-list-input>

        <f7-block>
          <f7-button outline round @click="signup">Sign up</f7-button>
        </f7-block>
      </f7-list>
      <div class="log-switch">
        Already have account. <f7-link href="/login/">Login </f7-link>
      </div>
    </f7-block>

    <!-- <input
        type="file"
        ref="file"
        style="display: none"
        @change="onFilePicked"
      /> -->
  </f7-page>
</template>
<script>
import { http } from "@/http";
export default {
  data() {
    return {
      dep: [],
      user: {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        status: "",
        department: "",
        email: "",
        phone: "",
      },
    };
  },
  created() {
    this.fecth_dep();
  },
  methods: {
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
    signup() {
      http
        .post("/api/signup", {
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          username: this.user.username,
          password: this.user.password,
          status: this.user.status,
          department: this.dep[0],
          email: this.user.email,
          phone: this.user.phone,
        })
        .then((Response) => {
          if (Response.status === 200) {
            const msg = Response.data.STT;
            this.msg = msg;
            this.sheet = true;
          } else if (
            Response.data.STT === "PHONE NUMBER HAS USED" ||
            Response.data.STT === "EMAIL HAS USED" ||
            Response.data.STT === "USERNAME HAS USED"
          ) {
            const msg = Response.data.STT;
            this.msg = msg;
            this.sheet = true;
          } else if (Response.data.STT === "DONE") {
            this.$router.push("/login/");
          }
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
.wrapper {
  text-align: center;
}
.log-switch {
  text-align: center;
}

.image--cover {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 10px;
  object-fit: cover;
  object-position: center;
}
</style>
