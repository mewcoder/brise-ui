# Input 输入框

## 用法

### 基础使用


<a-input v-model="input" placeholder="请输入" />

```vue
<template>
  <a-input v-model="input" placeholder="请输入" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
```

### 禁用状态


<a-input v-model="input" placeholder="请输入" disabled   />

```vue
<template>
  <a-input v-model="input" placeholder="请输入" disabled />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
```

## API

### props

| 名称                 | 类型          | 可选值 | 默认值 | 说明     |
| -------------------- | ------------- | ------ | ------ | -------- |
| modelValue / v-model | string/number | -      | -      | 绑定值   |
| disabled             | boolean       | -      | false  | 禁用     |
| placeholder          | string        | -      | -      | 占位文本 |

### 事件

| 名称   | 说明 | 参数 |
| ------ | ---- | ---- |
| blur   | -    | -    |
| focus  | -    | -    |
| change | -    | -    |
| input  | -    | -    |
