# Input 输入框

## 用法

### 基础用法

<a-input v-model="inputVal" placeholder="请输入" />

```vue
<template>
  <a-input v-model="inputVal" placeholder="请输入" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const inputVal = ref('');
</script>
```

### 禁用状态

<a-input v-model="inputVal" placeholder="禁用状态" disabled   />

```vue
<template>
  <a-input v-model="inputVal" placeholder="禁用状态" disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const inputVal = ref('');
</script>
```

## API

### 属性

| 名称                 | 类型          | 可选值 | 默认值 | 说明     |
| -------------------- | ------------- | ------ | ------ | -------- |
| modelValue / v-model | string/number | -      | -      | 绑定值   |
| disabled             | boolean       | -      | false  | 禁用     |
| placeholder          | string        | -      | -      | 占位文本 |

### 事件

| 名称   | 说明                    | 参数                     |
| ------ | ----------------------- | ------------------------ |
| blur   | 在 Input 失去焦点时触发 | (event: Event)           |
| focus  | 在 Input 获得焦点时触发 | (event: Event)           |
| change | 在 Input 值改变时触发   | (value: string \|number) |
