<template>
  <f7-page>  
         <f7-navbar back-link="back" title="Device"> </f7-navbar>
    <f7-block>
      <f7-list>
        <!-- controll page  -->
         <f7-list-item link="/humidityAndtemparature/" title="Controll device 1" ></f7-list-item> 
        <f7-list-item link="#">Link 2</f7-list-item>
        <f7-list-item link="#">Link 3</f7-list-item>
        <f7-list-item link="#">Link 4</f7-list-item>
        <f7-list-item link="#">Link 5</f7-list-item>           
      </f7-list>

    </f7-block>
      <f7-fab position="center-bottom" color="peat" href="/addDevice/" >
      <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
      <f7-icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></f7-icon>
    </f7-fab>
     
  </f7-page>
</template>

<script>
export default {
data(){
  return{
deviceHeader:""
  }
}

}
</script>

<style>

</style>