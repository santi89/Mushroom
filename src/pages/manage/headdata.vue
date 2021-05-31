<template>
  <f7-page>
    <f7-nav-bar back-link="back" title="HeadData"> </f7-nav-bar>
    <f7-block>
      <f7-list>
        <f7-list-input
          clear-button
          outline
          floating-label
          title="Head name"
          type="text"
        ></f7-list-input>
        <f7-list-input
          clear-button
          outline
          floating-label
          title="Head detail"
          type="text"
        ></f7-list-input>
        <f7-list-input
          clear-button
          outline
          floating-label
          title="Device Type"
          type="select"
        >
          <option value="">1</option>
          <option value="">2</option>
        </f7-list-input>
        <f7-list-input
          clear-button
          outline
          floating-label
          title="Unit"
          type="select"
        >
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </f7-list-input>

        <f7-list-item outline>
          <f7-button outline href="/unit/">Add Unit </f7-button>
        </f7-list-item>
      </f7-list>
      <f7-list>
        <f7-button> Add Head Data</f7-button>
      </f7-list>
    </f7-block>
  </f7-page>
</template>

<script>
export default {};
</script>

<style></style>
