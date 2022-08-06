<script setup lang="ts">
import { ref } from "vue";
import { ArrowUpCircleSharp, AddCircle } from "@vicons/ionicons5";
const str = ref("11111111111");
</script>

<template>
  <h1>Storm Vue</h1>
  <!-- 
  <h3>button</h3>
  <a-button>按钮</a-button>
  <a-button type="primary">按钮</a-button>
  <a-button type="success">按钮</a-button>
  <a-button type="warning">按钮</a-button>
  <a-button type="danger">按钮</a-button>

  <h3>icon</h3>
  <a-icon size="16" color="red"> <ArrowUpCircleSharp /> </a-icon>
  <a-icon size="16"> <AddCircle /> </a-icon> -->

  <h3>input</h3>
  <a-input v-model="str" class="w-200px" />
  <a-input v-model="str" disabled class="w-200px" />
  <div>input:{{ str }}</div>
</template>

<style scoped></style>
