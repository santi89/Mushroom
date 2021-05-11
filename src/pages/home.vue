<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar  :sliding="false">
      <f7-nav-title class="">Mushroom plant</f7-nav-title>
      <f7-nav-right>
            <f7-link icon-ios="f7:person_circle_fill" icon-aurora="f7:person_circle_fill" icon-md="material:account_circle" panel-open="left" href="/editprofile/"></f7-link>
        </f7-nav-right>
    </f7-navbar>
    <!-- Toolbar-->
    
    <!-- Page content-->
    <f7-block strong>
    <f7-block-title bold>Your Project</f7-block-title>

      <div class="card">
        <div class="card-content">
          <div class="list links-list no-ios-edges">
            <ul>
              <li><a href="#">Mushroom shed 1</a></li>
              <li><a href="#">Mushroom shed 2</a></li>
              <li><a href="#">Mushroom shed 3</a></li>
              <li><a href="#">Mushroom shed 4</a></li>
              <li><a href="#">Mushroom shed 5</a></li>
            </ul>
          </div>
        </div>
      </div>
    </f7-block>


   <f7-fab position="right-bottom" color="peat">
      <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
      <f7-icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></f7-icon>
    </f7-fab>
  </f7-page>
</template>
<script>
export default {
  
}
</script>

<style scoped>

</style>