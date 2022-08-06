<script setup lang="ts">
import { ArrowUpCircleSharp, AddCircle } from "@vicons/ionicons5";
</script>

<template>
  <h1>Storm Vue</h1>

  <h3>button</h3>
  <a-button>按钮</a-button>
  <a-button type="primary">按钮</a-button>
  <a-button type="success">按钮</a-button>
  <a-button type="warning">按钮</a-button>
  <a-button type="danger">按钮</a-button>

  <h3>icon</h3>
  <a-icon size="16" color="red"> <ArrowUpCircleSharp /> </a-icon>
  <a-icon size="16"> <AddCircle /> </a-icon>
</template>

<style scoped></style>
