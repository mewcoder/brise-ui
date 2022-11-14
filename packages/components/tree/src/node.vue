<template>
  <ul class="tree-ul">
    <li class="tree-li">
      <span class="tree-expand" @click="handleExpand">
        <ChevronRightIcon
          v-if="treeData.children && treeData.children.length && !treeData.expand"
        />
        <ChevronDownIcon v-if="treeData.children && treeData.children.length && treeData.expand" />
      </span>
      <input v-if="showCheckbox" type="checkbox" :value="treeData.checked" @input="handleCheck" />
      <span>{{ treeData.title }}</span>
      <tree-node
        v-if="treeData.expand"
        v-for="(item, index) in data.children"
        :key="index"
        :data="item"
        :show-checkbox="showCheckbox"
      ></tree-node>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { nodeProps } from './types';
import { ChevronRightIcon, ChevronDownIcon } from 'brise-icons';

const props = defineProps(nodeProps);

const treeData = reactive(props.data);

const handleExpand = () => {
  console.log(treeData);
  treeData.expand = !treeData.expand;
};

const handleCheck = (checked: any) => {
  updateTreeDown(treeData, checked);
};

const updateTreeDown = (data: any, checked: any) => {
  data.checked = checked;
  if (data.children && data.children.length) {
    data.children.forEach((item: any) => {
      updateTreeDown(item, checked);
    });
  }
};
</script>

<script lang="ts">
export default {
  name: 'TreeNode',
  inheritAttrs: false
};
</script>
