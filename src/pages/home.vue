<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar  :sliding="false">
      <f7-nav-title class="">Mushroom plant</f7-nav-title>
      <f7-nav-right>
            <f7-link icon-ios="f7:bell" icon-aurora="f7:bell" icon-md="material:account_circle" panel-open="left" href="/editprofile/"></f7-link>
        </f7-nav-right>
    </f7-navbar>
    <!-- Toolbar-->   
    <!-- Page content-->
    <f7-block-title bold>Your Project</f7-block-title>
      <f7-card>
    <f7-card-content :padding="false">
      <f7-list>
        <f7-list-item link="#" title="Link 1">tem 25 . Hu 99</f7-list-item>
        <f7-list-item link="#">Link 2</f7-list-item>
        <f7-list-item link="#">Link 3</f7-list-item>
        <f7-list-item link="#">Link 4</f7-list-item>
        <f7-list-item link="#">Link 5</f7-list-item>
      </f7-list>
    </f7-card-content>
  </f7-card>
    
   

   <f7-fab position="right-bottom" color="peat" href="/addProject/" _blank>
      <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
      <f7-icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></f7-icon>
    </f7-fab>
    

  </f7-page>
</template>
<script>
export default {
  data(){
    return{
    projectName:null,


    }}
  
}
</script>

<style scoped>

</style>