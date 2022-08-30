# checkbox 多选框

## 用法

### 基础使用

  <a-checkbox-group v-model="checkboxVal">
    <a-checkbox label="1">1</a-checkbox>
    <a-checkbox label="2">2</a-checkbox>
  </a-checkbox-group>

```vue
<template>
  <a-checkbox-group v-model="checkboxVal">
    <a-checkbox label="1">1</a-checkbox>
    <a-checkbox label="2">2</a-checkbox>
  </a-checkbox-group>
</template>
```

<script lang="ts" setup>
import { ref } from "vue";
const checkboxVal = ref([]);
</script>

## API

### props

| 名称                 | 类型          | 可选值 | 默认值 | 说明   |
| -------------------- | ------------- | ------ | ------ | ------ |
| modelValue / v-model | string/number | -      | -      | 绑定值 |
| disabled             | boolean       | -      | false  | 禁用   |

### 事件

| 名称   | 说明 | 参数 |
| ------ | ---- | ---- |
| change | -    | -    |
