<template>
  <f7-page name="signup">
    <f7-navbar title="Sign up" back-link="back"></f7-navbar>

    <div class="wrapper">
      <img class="image--cover" src="/user_male_circle_filled1600.png" alt="" @click="launchFilePicker">    
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
    <f7-block>
      <f7-button outline @click="signUp">Sign up</f7-button>
      <input
        type="file"
        ref="file"
        style="display: none"
        @change="onFilePicked"
      />
    </f7-block>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      firstname: null,
      lastname: null,
      email: null,
      username: null,
      password: null,
      phone_number: null,
    };
  },
  computed:{
    image_url(){
      return this.$store.getters.image_url; 
      
    },
    files(){
      return this.$store.getters.files;
    }

  },
  methods:{
    launchFilePicker(){
      this.$ref.file.click()
    },
    onFilePicked(){
     this.$store.dispatch('readFile','setImageURL')
    }
  },
  actions:{
    
       
     
  }
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
  margin: 10px;
  object-fit: cover;
  object-position: center;
}
</style>
