<template>
  <f7-page name="editprofile">
    <f7-navbar title="Edit Profile"></f7-navbar>

    <div class="wrapper">
      <img
        class="image--cover"
        :src="image_url"
        alt=""
        @click="launchFilePicker"
      />
    </div>
      <f7-block>
        <f7-button outline  popup-open=".demo-edit"> Edit</f7-button>
      </f7-block>
      
    <f7-list no-hairlines-md>
      <f7-list-item title="FirstName:" >{{firstname}}</f7-list-item>
      <f7-list-item title="LastName:" >{{lastname}}</f7-list-item>
      <f7-list-item title="userName:" >{{username}}</f7-list-item>
      <f7-list-item title="password:" >{{password}}</f7-list-item>
      <f7-list-item title="email:" >{{email}}</f7-list-item>
      <f7-list-item title="phone:" >{{phone}}</f7-list-item>      
    </f7-list>
<!-- pop up edit -->
<f7-popup class="demo-edit" :opened="popupOpened" @popup:closed="popupOpened = false">
    <f7-page>
      <f7-navbar title="edit profile">
        <f7-nav-right>
          <f7-link popup-close @click="submitEdit">Done</f7-link>
        </f7-nav-right>
      </f7-navbar>
      <f7-block>
        <f7-list no-hairlines-md>
      <f7-list-input
        required
        floating-label
        :value="firstname"
        @input="firstname = $event.target.value"
        label="FirstName"
        type="text"
        placeholder="Your FirstName"
        clear-button="false"
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

      <!-- <f7-list-input
        enable:false
        floating-label
        :value="password"
        @input="password = $event.target.value"
        label="Password"
        type="password"
        placeholder="Your password"
        required
        clear-button
      >  </f7-list-input> -->
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
      </f7-block>
    </f7-page>
  </f7-popup>


      

  </f7-page>
</template>

<script>
import { f7 } from 'framework7-vue';
export default {
  data() {
    return{
    image_url:"https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png",

      firstname: "santi",
      lastname: "bm",
      username: "santi",
      password:"123456",
      email: "aafa@fdsfsd",
      phone_number:"020",
      popupOpened: false,
    }
  },
  computed: {
  //   image_url(){
  //     return this.$store.getters.image_url; 
  // }
},
}
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
}</style>
