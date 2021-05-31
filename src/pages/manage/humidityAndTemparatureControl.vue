<template>
  <f7-page :page-content="false">
    <f7-navbar title="Mushroom Tabs" back-link="Back" theme-color></f7-navbar>

    <f7-toolbar tabbar top>
      <f7-link tab-link="#tab-1" tab-link-active>Tab 1</f7-link>
      <f7-link tab-link="#tab-2">Tab 2</f7-link>
    </f7-toolbar>
    

<f7-tabs swipeable>
    <f7-tab id="tab-1" class="page-content" tab-active>

      <f7-block>
        <p>Tab 1 content</p>
        <p>Lorem ipsum dolor sit amet, consem. Itaque, ipsa voum, officiis veniam nostrum cum cumque impedit.</p>
        <p>Laborum illum ipsa voluptatibusus ea soluta doloremque. Iure fugit, minima facere.</p>
      </f7-block>

    </f7-tab>



    <f7-tab id="tab-2" class="page-content">
      <f7-block>

        <p>Tab 2 content</p>
        <p>Lorem ipsum dolor sit amet, consem. Itaque, ipsa voum, officiis veniam nostrum cum cumque impedit.</p>
        <p>Laborum illum ipsa voluptatibusus ea soluta doloremque. Iure fugit, minima facere.</p>
        
      </f7-block>

    </f7-tab>
    </f7-tabs>
   

  </f7-page>
</template>

<script>
export default {};
</script>

<style></style>
