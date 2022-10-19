<template>
  <div class="box">
    <Collapse></Collapse>
    <Breadcrumd></Breadcrumd>
    <DropDown></DropDown>

  </div>
</template>

<script setup lang="ts">
import Collapse from './Collapse.vue'
import Breadcrumd from './Breadcrumb.vue'
import DropDown from "./DropDown.vue"

</script>

<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
}
</style>
