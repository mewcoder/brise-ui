# Switch 开关

## 基础使用

<a-switch v-model="swtichVal1" />

```vue
<template>
  <a-switch v-model="swtichVal" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const swtichVal = ref(false);
</script>
```

## 禁用状态

<a-switch v-model="swtichVal2" disabled />

```vue
<template>
  <a-switch v-model="swtichVal" disabled />
</template>
```

## 属性

| 名称                 | 类型    | 可选值 | 默认值 | 说明 |
| -------------------- | ------- | ------ | ------ | ---- |
| modelValue / v-model | boolean | -      | 绑定值 |
| disabled             | boolean | -      | false  | 禁用 |

## 事件

| 名称   | 说明                   | 参数 |
| ------ | ---------------------- | ---- |
| change | 绑定值变化时触发的事件 | 新值 |

<script lang="ts" setup>
import { ref } from "vue";
const swtichVal1 = ref(false);
const swtichVal2 = ref(true);
</script>
