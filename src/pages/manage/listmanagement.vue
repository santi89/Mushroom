<template>
  <f7-page>
    <f7-navbar sliding="false">
      <f7-nav-title>Management</f7-nav-title>
    </f7-navbar>
    <!-- <f7-block> -->
    <f7-card>
      <f7-card-content :padding="false">
        <f7-list hairlines >
          <f7-list-item link="/addDevices/" title="Devices" icon-f7="folder_fill"
            >
            <template #media>
              <f7-icon icon="demo-list-icon"></f7-icon> </template>
          </f7-list-item>
          <hr>
          <f7-list-item link="/devicetype/" title="Devices type"
            ><template #media>
              <f7-icon icon="demo-list-icon"></f7-icon> </template
          ></f7-list-item>
          </f7-list>
          <f7-list>
          <f7-list-item link="#" title="Header"
            ><template #media>
              <f7-icon icon="demo-list-icon"></f7-icon> </template
          ></f7-list-item>
          <f7-list-item link="#" title="Unit"
            ><template #media>
              <f7-icon icon="demo-list-icon"></f7-icon> </template
          ></f7-list-item>
          <f7-list-item link="#"
            ><template #media>
              <f7-icon icon="demo-list-icon"></f7-icon> </template
          ></f7-list-item>
        </f7-list>
      </f7-card-content>
    </f7-card>
    <!-- </f7-block> -->
  </f7-page>
</template>

<script>
export default {};
</script>

<style>
.demo-list-icon,
.icon-f7 {
  background: #ccc;
  display: block;
  position: relative;
}
.ios .demo-list-icon,
.ios .icon-f7,
.ios .icon-vi {
  width: 29px;
  height: 29px;
  border-radius: 6px;
  box-sizing: border-box;
}
.md .demo-list-icon,
.md .icon-f7,
.md .icon-vi {
  width: 24px;
  height: 24px;
  border-radius: 4px;
}
.aurora .demo-list-icon,
.aurora .icon-f7,
.aurora .icon-vi {
  width: 18px;
  height: 18px;
  border-radius: 4px;
}
</style>
