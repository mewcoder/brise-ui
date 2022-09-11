# Input 输入框

## 基础用法

<a-input v-model="inputVal1" placeholder="请输入" />

```vue
<template>
  <a-input v-model="inputVal" placeholder="请输入" />
</template>
```

## 禁用状态

<a-input v-model="inputVal2" placeholder="禁用状态" disabled   />

```vue
<template>
  <a-input v-model="inputVal" placeholder="禁用状态" disabled />
</template>
```

## 属性

| 名称                 | 类型          | 可选值 | 默认值 | 说明     |
| -------------------- | ------------- | ------ | ------ | -------- |
| modelValue / v-model | string/number | -      | -      | 绑定值   |
| disabled             | boolean       | -      | false  | 禁用     |
| placeholder          | string        | -      | -      | 占位文本 |


## 事件

| 名称   | 说明                    | 参数                     |
| ------ | ----------------------- | ------------------------ |
| blur   | 在 Input 失去焦点时触发 | (event: Event)           |
| focus  | 在 Input 获得焦点时触发 | (event: Event)           |
| change | 在 Input 值改变时触发   | (value: string \|number) |


<script lang="ts" setup>
import { ref } from 'vue';
const inputVal1 = ref('');
const inputVal2 = ref('');
</script>
