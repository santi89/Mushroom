<template>
     <f7-page no-hairlines-md>
       <f7-navbar title="Add Project" back-link="back">
      <f7-nav-right >Add</f7-nav-right>     
      </f7-navbar>

    <f7-block-title bold>Add new project</f7-block-title>
      <f7-list>
        <f7-list-input outline floating-label label="Project Name" type="text"></f7-list-input>
        
        <f7-list-input outline floating-label label="longitude" type="number"></f7-list-input>
        
        <f7-list-input outline floating-label label="tatitude" type="number"></f7-list-input>
        
        <f7-list-input floating-label outline label="time Start" type="Date"></f7-list-input>

        <f7-list-input floating-label outline label="time end" type="Date"></f7-list-input>
        
        <f7-list-input floating-label outline label="device Name" type="text"></f7-list-input>
      
        <f7-list-input floating-label outline label="device ID For log" type="text"></f7-list-input>       
      </f7-list>

<f7-block>
  <f7-button outline>add</f7-button>
</f7-block>

     </f7-page>
  
</template>

<script>
export default {

}
</script>

<style>

</style>