<template>
  <f7-page name="editprofile">
    <f7-navbar title="Edit Profile"></f7-navbar>

    <div class="wrapper">
      <img
        class="image--cover"
        src="src/assets/user_male_circle_filled1600.png"
        alt=""
        @click="launchFilePicker"
      />
    </div>

    <f7-list no-hairlines-md>
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
        :value="username"
        @input="username = $event.target.value"
        label="Username"
        type="text"
        placeholder="Your Username"
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
        required
        clear-button
      >
      </f7-list-input>
      <f7-list-input
        floating-label
        :value="phone_number"
        @input="phone_number = $event.target.value"
        label="Phone Number"
        type="text"
        placeholder="Your Phone Number"
        required
        clear-button
      >
      </f7-list-input>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  data() {
    return{
      image_url:"user_male_circle_filled1600.png"
    }
  }
};
</script>

<style></style>
