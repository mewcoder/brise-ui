<template>
  <div>
    <tree-node
      v-for="(item, index) in treeData"
      :key="index"
      :data="item"
      :show-checkbox="showCheckbox"
    ></tree-node>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { treeProps } from "./types";
import TreeNode from "./node.vue";

const props = defineProps(treeProps);

const treeData: any = computed(() => {
  return props.data;
});


</script>

<script lang="ts">
export default {
  name: "ATree",
  inheritAttrs: false,
};
</script>
