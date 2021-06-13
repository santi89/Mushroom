<template>
  <f7-page name="signin">
    <f7-page no-hairlines-md>
      <div class="wrapper">
        <img
          class="image--cover"
          src="https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png"
          alt=""
        />
      </div>

      <f7-login-screen-title>Login</f7-login-screen-title>
      <f7-list Strong>
        <f7-list-input      
         floating-label  
          :value="email"
          @input="email = $event.target.value"
          label="E-mail"
          type="email"
          placeholder="Your e-mail"
          clear-button
        >
        </f7-list-input>
        <f7-list-input
          floating-label
          :value="password"
          @input="password = $event.target.value"
          label="Password"
          type="password"
          placeholder="Your password"
          clear-button
        >
        </f7-list-input>
      </f7-list>
      <f7-block>
        <f7-button outline @click="logInmessage" href="/">Login</f7-button>
        <br />
        <div style="text-align: center">
          <!-- <f7-link v-if="show_resend_email" @click="resendEmail" :color="color(time_left)">Resend Confirmation Email<span v-if="time_left>0">&nbsp; {{time_left}}</span></f7-link><br> -->
          <f7-link href="/signup/">Don't have an account? Sign up</f7-link
          ><br />
          <f7-link @click="forgetPassword">Forget Password</f7-link>
        </div>
      </f7-block>
    </f7-page>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      username: null,
      password: null,
    };
  },
  methods() {
    alertLoginData = () => {
      f7.dialog.alert(
        "Username: " + username.value + "<br>Password: " + password.value,
        () => {
          f7.loginScreen.close();
        }
      );
    };
    logInmessage = () => {
      console.log(store.state.name);
    };
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
