# Rate 评分

## 用法

### 基础使用

<a-rate v-model="rate" />

```vue
<template>
  <a-rate v-model="rateVal" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const rateVal = ref(0);
</script>
```

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
