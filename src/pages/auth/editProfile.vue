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
  </f7-page>
</template>

<script>
export default {};
</script>

<style></style>
