# Rate 评分

## 基础使用

<a-rate v-model="rateVal1" />

```vue
<template>
  <a-rate v-model="rateVal" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const rateVal = ref(1);
</script>
```

## 只读状态

<a-rate v-model="rateVal2" disabled />

```vue
<template>
  <a-rate v-model="rateVal" disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const rateVal = ref(2);
</script>
```

## 属性

| 名称                 | 类型    | 可选值 | 默认值 | 说明   |
| -------------------- | ------- | ------ | ------ | ------ |
| modelValue / v-model | number  | -      | 0      | 绑定值 |
| disabled             | boolean | -      | false  | 禁用   |

## 事件

| 名称   | 说明           | 参数           |
| ------ | -------------- | -------------- |
| change | 分数改变时触发 | (value:number) |

<script lang="ts" setup>
import { ref } from "vue";
const rateVal1 = ref(1);
const rateVal2 = ref(2);
</script>
